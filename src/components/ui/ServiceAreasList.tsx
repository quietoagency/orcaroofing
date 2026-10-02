import { ArrowRight } from 'iconsax-reactjs'
import type { Page } from '@/payload-types'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'serviceAreasList' }>

const rowClass =
  'flex items-center justify-between gap-3 border-b border-sand px-2 py-2.5 text-[15px] font-medium text-[#222]'

export default function ServiceAreasList({ heading, subheading, counties }: Props) {
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
        {subheading && <p className="text-base leading-7 text-slate xl:text-[17px]">{subheading}</p>}
      </div>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 xl:grid-cols-4">
        {counties.map(({ id, name, locations }) => (
          <div key={id} className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between border-b-2 border-charcoal pb-3">
              <h3 className="text-xl leading-7 font-semibold text-black">{name}</h3>
              <span className="text-[13px] font-semibold text-slate">
                {locations.length} {locations.length === 1 ? 'city' : 'cities'}
              </span>
            </div>
            <ul>
              {locations.map(({ id: locationId, location, locationUrl }) => (
                <li key={locationId}>
                  {locationUrl ? (
                    <a href={locationUrl} className={`${rowClass} transition-colors hover:bg-linen`}>
                      <span>{location}</span>
                      <ArrowRight size={16} color="#bb945b" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className={rowClass}>{location}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
