import type { Page } from '@/payload-types'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'mapSection' }>

const linkClass = 'underline decoration-gold decoration-2 underline-offset-4'

export default function MapSection({ title, text, mapUrl, areas, linkLabel, linkUrl }: Props) {
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
      </div>
    </section>
  )
}
