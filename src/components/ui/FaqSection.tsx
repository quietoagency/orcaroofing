import Image from 'next/image'
import { ArrowDown2 } from 'iconsax-reactjs'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Page } from '@/payload-types'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'faqSection' }>

export default function FaqSection({ heading, image, questions }: Props) {
  const media = typeof image === 'object' ? image : null

  return (
    <section aria-label={heading} className="flex flex-col bg-charcoal xl:min-h-150 xl:flex-row">
      <div className="relative h-64 shrink-0 overflow-hidden bg-steel-900 xl:h-auto xl:w-170">
        {media?.url && (
          <Image
            src={media.url}
            alt={media.alt ?? heading}
            fill
            sizes="(min-width: 1280px) 680px, 100vw"
            className="object-cover object-[35%_55%]"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0)_40%,#111111_100%)] xl:bg-[linear-gradient(90deg,rgba(17,17,17,0)_45%,rgba(17,17,17,0.7)_80%,#111111_100%)]" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(17,17,17,0.35)_0%,rgba(17,17,17,0)_25%,rgba(17,17,17,0)_75%,rgba(17,17,17,0.45)_100%)] xl:block" />
      </div>

      <div className="flex grow flex-col justify-center gap-10 px-5 py-14 xl:py-26 xl:pr-28 xl:pl-12">
        <div className="flex flex-col items-start gap-4">
          <span className="h-1 w-16 bg-gold" />
          <h2 className="text-[28px] leading-9 font-semibold text-gold xl:text-[40px] xl:leading-12.5">
            {heading}
          </h2>
        </div>

        <div className="border-t border-[#333]">
          {questions.map(({ id, question, answer }, index) => (
            <details key={id} name="faq" open={index === 0} className="group border-b border-[#333]">
              <summary className="flex min-h-19 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-[17px] leading-6.75 font-semibold text-white xl:text-[19px]">
                  {question}
                </span>
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#555] text-gold group-open:border-gold group-open:bg-gold group-open:text-charcoal"
                >
                  <ArrowDown2 size={18} color="currentColor" className="transition-transform group-open:rotate-180" />
                </span>
              </summary>
              <div className="pb-6 text-base leading-6.75 text-[#bdbdbd] xl:pr-16 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-3">
                <RichText data={answer} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
