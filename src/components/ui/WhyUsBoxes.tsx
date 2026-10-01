import type { Page } from '@/payload-types'
import WhyUsBoxCard from './WhyUsBoxCard'
import WhyUsFeaturedCard from './WhyUsFeaturedCard'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'whyUsBoxes' }>

export default function WhyUsBoxes({ title, subtitle, cards }: Props) {
  return (
    <section
      aria-label="Why choose us"
      className="flex flex-col gap-10 bg-charcoal px-5 py-14 xl:gap-16 xl:px-28 xl:py-26"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="h-1 w-16 bg-gold" />
        <h2 className="text-[28px] leading-9 font-semibold text-gold xl:text-[40px] xl:leading-12.5">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-180 text-base leading-7 text-sand xl:text-[17px]">{subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) =>
          card.featured ? (
            <WhyUsFeaturedCard key={card.id} {...card} />
          ) : (
            <WhyUsBoxCard key={card.id} {...card} />
          ),
        )}
      </div>
    </section>
  )
}
