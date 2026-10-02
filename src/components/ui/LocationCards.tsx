import { RichText } from '@payloadcms/richtext-lexical/react'
import { Location } from 'iconsax-reactjs'
import type { Page } from '@/payload-types'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'locationCards' }>

export default function LocationCards({ text, cards }: Props) {
  return (
    <section
      aria-label="Service regions"
      className="flex flex-col gap-10 bg-[#f6f2ec] px-5 py-14 xl:gap-12 xl:px-28 xl:pt-22 xl:pb-26"
    >
      {text && (
        <p className="mx-auto max-w-225 text-center text-base leading-7 text-[#222] xl:text-[17px] xl:leading-7.25">
          {text}
        </p>
      )}
      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ id, title, text }) => (
          <article key={id} className="flex flex-col gap-3.5 bg-white p-8">
            <span className="flex size-12 items-center justify-center rounded-full bg-linen text-gold-dark">
              <Location size={22} color="currentColor" aria-hidden="true" />
            </span>
            <h3 className="text-xl leading-6.75 font-semibold text-black">{title}</h3>
            <div className="text-[15px] leading-6.25 text-slate [&_a]:font-semibold [&_a]:text-black [&_a]:underline [&_a]:decoration-gold [&_a]:underline-offset-3">
              <RichText data={text} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
