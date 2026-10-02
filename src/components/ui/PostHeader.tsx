import Image from 'next/image'
import { Calendar } from 'iconsax-reactjs'
import type { Media, Post } from '@/payload-types'
import { formatPostDate } from '@/lib/formatPostDate'

type Props = {
  post: Post
}

export default function PostHeader({ post }: Props) {
  const { title, category, publishedAt, featuredImage } = post
  const image = typeof featuredImage === 'object' ? (featuredImage as Media) : null

  return (
    <header className="relative overflow-hidden bg-charcoal xl:h-90">
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.55)_0%,rgba(17,17,17,0.85)_100%)] xl:bg-[linear-gradient(90deg,rgba(17,17,17,0.92)_0%,rgba(17,17,17,0.75)_40%,rgba(17,17,17,0.15)_75%,rgba(17,17,17,0)_100%)]" />
      <div className="relative flex flex-col gap-5 px-5 py-14 xl:h-full xl:max-w-200 xl:justify-center xl:px-28 xl:py-0">
        {category && (
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
              {category}
            </span>
          </div>
        )}
        <h1 className="text-[28px] leading-9 font-bold text-white uppercase xl:text-[40px] xl:leading-12">
          {title}
        </h1>
        <span className="flex items-center gap-2 text-xs font-medium text-white">
          <Calendar size={14} color="#bb945b" aria-hidden="true" />
          <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time>
        </span>
      </div>
    </header>
  )
}
