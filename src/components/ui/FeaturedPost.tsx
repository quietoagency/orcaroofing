import Image from 'next/image'
import { ArrowRight, Calendar } from 'iconsax-reactjs'
import type { Media, Post } from '@/payload-types'
import { formatPostDate } from '@/lib/formatPostDate'

type Props = {
  post: Post
  category?: string
}

export default function FeaturedPost({ post, category }: Props) {
  const { title, slug, publishedAt, featuredImage } = post
  const image = typeof featuredImage === 'object' ? (featuredImage as Media) : null

  return (
    <a
      href={`/blog/${slug}`}
      className="group flex flex-col bg-charcoal text-white xl:h-110 xl:flex-row"
    >
      <div className="relative h-60 shrink-0 xl:h-full xl:w-175">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1280px) 700px, 100vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex grow flex-col gap-5 px-5 py-8 xl:px-13 xl:py-12">
        <div className="flex items-center gap-3">
          <span className="flex h-7.5 items-center rounded-full bg-gold px-3.5 text-xs font-bold tracking-[0.12em] text-charcoal uppercase">
            Latest
          </span>
          {category && (
            <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
              {category}
            </span>
          )}
        </div>
        <h2 className="text-[26px] leading-8 font-semibold text-white xl:text-[34px] xl:leading-10.75">
          {title}
        </h2>
        <span className="flex items-center gap-2 text-sm font-medium text-[#bdbdbd]">
          <Calendar size={15} color="#bb945b" aria-hidden="true" />
          <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time>
        </span>
        <span className="mt-2 flex h-14 items-center gap-3.5 self-start rounded-full bg-gold py-0 pr-2 pl-7 text-base font-semibold text-black xl:mt-auto">
          Read article
          <span className="flex size-10 items-center justify-center rounded-full bg-charcoal transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={18} color="#ffffff" aria-hidden="true" />
          </span>
        </span>
      </div>
    </a>
  )
}
