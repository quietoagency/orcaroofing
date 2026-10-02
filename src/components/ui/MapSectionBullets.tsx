import { RichText } from '@payloadcms/richtext-lexical/react'
import { Check } from 'iconsax-reactjs'
import type { Page } from '@/payload-types'

type MapSectionBlock = Extract<NonNullable<Page['components']>[number], { blockType: 'mapSection' }>
type Props = Pick<MapSectionBlock, 'bullets' | 'footer'>

const richTextClass =
  '[&_a]:font-semibold [&_a]:text-black [&_a]:underline [&_a]:decoration-gold [&_a]:underline-offset-3'

export default function MapSectionBullets({ bullets, footer }: Props) {
  return (
    <>
      {bullets && bullets.length > 0 && (
        <ul className="flex flex-col gap-3.5">
          {bullets.map(({ id, text }) => (
            <li key={id} className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-linen text-gold-dark">
                <Check size={14} color="currentColor" aria-hidden="true" />
              </span>
              <div className={`text-sm leading-5.5 text-[#222] ${richTextClass}`}>
                <RichText data={text} />
              </div>
            </li>
          ))}
        </ul>
      )}
      {footer && (
        <div className={`border-t border-sand pt-4 text-sm leading-5.5 text-slate ${richTextClass}`}>
          <RichText data={footer} />
        </div>
      )}
    </>
  )
}
