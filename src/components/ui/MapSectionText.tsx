import type { Page } from '@/payload-types'

type MapSectionBlock = Extract<NonNullable<Page['components']>[number], { blockType: 'mapSection' }>
type Props = Pick<MapSectionBlock, 'text' | 'areas' | 'linkLabel' | 'linkUrl'>

const linkClass = 'underline decoration-gold decoration-2 underline-offset-4'

export default function MapSectionText({ text, areas, linkLabel, linkUrl }: Props) {
  return (
    <>
      {text && <p className="text-base leading-6.75 text-slate">{text}</p>}
      {areas && areas.length > 0 && (
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
          {areas.map((area) => (
            <li key={area.id} className="flex items-center gap-3">
              <span className="size-2.5 shrink-0 rounded-full bg-gold" />
              {area.link ? (
                <a href={area.link} className="text-[17px] leading-7 font-medium text-[#222]">
                  {area.name}
                </a>
              ) : (
                <span className="text-[17px] leading-7 font-medium text-[#222]">{area.name}</span>
              )}
            </li>
          ))}
        </ul>
      )}
      {linkLabel && (
        <a href={linkUrl || '#'} className={`text-base font-semibold text-black ${linkClass}`}>
          {linkLabel}
        </a>
      )}
    </>
  )
}
