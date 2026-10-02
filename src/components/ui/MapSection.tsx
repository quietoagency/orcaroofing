import type { Page } from '@/payload-types'
import MapSectionBullets from './MapSectionBullets'
import MapSectionText from './MapSectionText'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'mapSection' }>

export default function MapSection({ variant, title, mapUrl, text, areas, linkLabel, linkUrl, bullets, footer }: Props) {
  return (
    <section
      aria-label="Areas we serve"
      className="relative flex flex-col bg-sand xl:h-180 xl:flex-row xl:items-center xl:justify-end xl:overflow-hidden xl:px-28"
    >
      {mapUrl && (
        <iframe
          src={mapUrl}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-80 w-full border-0 xl:absolute xl:inset-0 xl:h-full"
        />
      )}
      <div className="relative flex flex-col gap-5.5 border border-sand bg-white p-8 shadow-[0_24px_48px_rgba(17,17,17,0.12)] xl:w-130 xl:px-13 xl:py-12">
        <span className="h-1 w-16 bg-gold" />
        <h2 className="text-[28px] leading-9 font-semibold text-black xl:text-[34px] xl:leading-10.5">
          {title}
        </h2>
        {variant === 'bullets' ? (
          <MapSectionBullets bullets={bullets} footer={footer} />
        ) : (
          <MapSectionText text={text} areas={areas} linkLabel={linkLabel} linkUrl={linkUrl} />
        )}
      </div>
    </section>
  )
}
