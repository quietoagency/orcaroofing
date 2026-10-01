import type { Page } from '@/payload-types'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'reviews' }>

function Stars() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#bb945b" aria-hidden="true">
          <path d="m12 2.5 2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews({ title, subtitle, reviews }: Props) {
  // The track holds two copies of the list so translating it -50% loops seamlessly.
  const loop = [...reviews, ...reviews]

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

      <div className="group relative overflow-hidden">
        <ul className="flex w-max animate-marquee gap-6 px-3 group-hover:paused motion-reduce:animate-none">
          {loop.map((item, i) => (
            <li
              key={`${item.id}-${i}`}
              aria-hidden={i >= reviews.length || undefined}
              className="flex min-h-85 w-80 shrink-0 flex-col gap-5 border border-sand bg-[#f6f2ec] p-8 xl:w-105"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <svg width="40" height="32" viewBox="0 0 40 32" fill="#e5dacc" aria-hidden="true">
                  <path d="M0 32V19C0 8 6 1.5 16 0l1.5 4.5C11 6.5 8.5 10 8.5 15H16v17zm22 0V19c0-11 6-17.5 16-19l1.5 4.5C33 6.5 30.5 10 30.5 15H38v17z" />
                </svg>
              </div>
              <p className="grow text-base leading-6.75 text-[#222]">{item.review}</p>
              <div className="border-t border-sand pt-4">
                <span className="text-xl leading-5 font-semibold text-black">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white to-transparent xl:w-30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white to-transparent xl:w-30" />
      </div>
    </section>
  )
}
