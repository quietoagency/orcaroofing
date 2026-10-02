import type { Page } from '@/payload-types'
import { icons } from '@/lib/icons'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'simpleCardSection' }>

export default function SimpleCardSection({ heading, subheading, cards }: Props) {
  return (
    <section
      aria-label={heading}
      className="flex flex-col gap-10 bg-white px-5 py-14 xl:gap-14 xl:px-28 xl:py-26"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="h-1 w-16 bg-gold" />
        <h2 className="text-[28px] leading-9 font-semibold text-black xl:text-[40px] xl:leading-12.5">
          {heading}
        </h2>
        {subheading && (
          <p className="max-w-190 text-base leading-7 text-slate xl:text-[17px]">{subheading}</p>
        )}
      </div>

      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ id, icon, title, description }) => {
          const Icon = icons[icon]
          return (
            <div key={id} className="flex flex-col gap-7 bg-[#f6f2ec] p-8">
              <span className="flex size-15 items-center justify-center rounded-full bg-sand text-charcoal">
                <Icon size={28} />
              </span>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[22px] leading-7.25 font-semibold text-black">{title}</h3>
                {description && <p className="text-[15px] leading-6.25 text-slate">{description}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
