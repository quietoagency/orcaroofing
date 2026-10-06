import type { Page } from '@/payload-types'

import Carousel from './Carousel'
import ReviewsSlide from './ReviewsSlide'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'reviews' }>

export default function Reviews({ title, subtitle, reviews }: Props) {
  return (
    <section
      aria-label="Reviews"
      className="flex flex-col gap-10 overflow-hidden bg-white py-14 xl:gap-14 xl:py-26"
    >
      <div className="flex flex-col items-center gap-4 px-5 text-center xl:px-28">
        <span className="h-1 w-16 bg-gold" />
        <h2 className="text-[28px] leading-9 font-semibold text-black xl:text-[40px] xl:leading-12.5">
          {title}
        </h2>
        {subtitle && <p className="text-base leading-7 text-slate xl:text-[17px]">{subtitle}</p>}
      </div>

      <div className="relative">
        <Carousel
          slides={reviews.map((item) => (
            <ReviewsSlide key={item.id} review={item.review} name={item.name} />
          ))}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white to-transparent xl:w-30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white to-transparent xl:w-30" />
      </div>
    </section>
  )
}
