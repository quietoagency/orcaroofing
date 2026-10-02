import Image from 'next/image'
import { ArrowRight, Calendar } from 'iconsax-reactjs'
import type { Media, Post } from '@/payload-types'
import { formatPostDate } from '@/lib/formatPostDate'

type Props = {
  post: Post
  category?: string
}

export default function BlogPostCard({ post, category }: Props) {
  const { title, slug, publishedAt, featuredImage } = post
  const image = typeof featuredImage === 'object' ? (featuredImage as Media) : null

  return (
    <a
      href={`/blog/${slug}`}
      className="group flex h-full flex-col border border-sand bg-white text-[#222]"
    >
      <div className="relative h-50 shrink-0">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex grow flex-col gap-3 p-6">
        {category && (
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-dark uppercase">
            {category}
          </span>
        )}
        <h3 className="text-xl leading-6.75 font-semibold text-black">{title}</h3>
        <div className="mt-auto flex items-center justify-between border-t border-sand pt-4">
          <span className="flex items-center gap-2 text-[13px] font-medium text-slate">
            <Calendar size={15} color="#8a6a3b" aria-hidden="true" />
            <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time>
          </span>
          <ArrowRight
            size={18}
            color="#8a6a3b"
            className="transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  )
}
