'use client'

import { useState } from 'react'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Page } from '@/payload-types'
import { ArrowRight } from 'iconsax-reactjs'
import Button from './Button'
import { icons } from '@/lib/icons'

type Props = Extract<
  NonNullable<Page['components']>[number],
  { blockType: 'servicesAndMaterialsSection' }
>

const linkClass = 'font-semibold text-black underline decoration-gold underline-offset-4'

export default function ServicesAndMaterialsSection({
  heading,
  subheading,
  groups,
  ctaLabel,
  ctaLink,
  footer,
}: Props) {
  const services = groups.flatMap((group) =>
    (group.services ?? []).map((service) => ({ ...service, groupLabel: group.label })),
  )
  const [activeId, setActiveId] = useState(services[0]?.id)
  const active = services.find((s) => s.id === activeId) ?? services[0]
  if (!active) return null
  const image = typeof active.image === 'object' ? active.image : null

  return (
    <section
      aria-label="Services"
      className="flex flex-col gap-10 bg-[#f6f2ec] px-5 py-14 xl:gap-14 xl:px-28 xl:py-26"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="h-1 w-16 bg-gold" />
        <h2 className="text-[28px] leading-9 font-semibold text-black xl:text-[40px] xl:leading-12.5">
          {heading}
        </h2>
        {subheading && <p className="text-base leading-7 text-slate xl:text-[17px]">{subheading}</p>}
      </div>

      <div className="flex flex-col gap-8 xl:min-h-170 xl:flex-row xl:gap-12">
        <nav aria-label="Services" className="flex flex-col gap-8 xl:w-105 xl:shrink-0">
          {groups.map((group) => (
            <div key={group.id} className="flex flex-col">
              <div className="pb-3 text-xl leading-7 font-semibold text-black">{group.label}</div>
              <div className="border-t border-sand">
                {(group.services ?? []).map(({ id, title, icon }) => {
                  const Icon = icons[icon]
                  const isActive = id === activeId
                  return (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveId(id)}
                      className={`flex h-16 w-full cursor-pointer items-center gap-5 border-b px-6 text-left text-[17px] transition-colors ${
                        isActive
                          ? 'border-charcoal bg-charcoal font-semibold text-white'
                          : 'border-sand bg-transparent font-medium text-[#222] hover:bg-linen'
                      }`}
                    >
                      <span
                        className={`flex size-7 shrink-0 items-center justify-center ${
                          isActive ? 'text-gold' : 'text-steel-900'
                        }`}
                      >
                        <Icon />
                      </span>
                      <span className="grow">{title}</span>
                      {isActive && <ArrowRight size={20} color="#bb945b" aria-hidden="true" />}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        <article className="flex grow flex-col gap-7 border border-sand bg-white px-6 py-8 xl:px-14 xl:py-12">
          <div className="relative flex h-56 shrink-0 items-center justify-center overflow-hidden bg-sand text-sm font-medium text-slate xl:h-70">
            {image?.url ? (
              <Image
                src={image.url}
                alt={image.alt ?? active.title}
                fill
                sizes="(min-width: 1280px) 600px, 100vw"
                className="object-cover"
              />
            ) : (
              `[${active.title} photo]`
            )}
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[28px] leading-9 font-semibold text-black xl:text-4xl xl:leading-11">
              {active.title}
            </h3>
            <p className="max-w-155 text-[17px] leading-7.25 text-[#222]">{active.description}</p>
          </div>
          <div className="flex flex-col items-start gap-5 xl:mt-auto xl:flex-row xl:items-center xl:gap-8">
            <Button
              variant="cta"
              href={ctaLink || '#'}
              icon={<ArrowRight size={20} color="#ffffff" aria-hidden="true" />}
            >
              {ctaLabel}
            </Button>
            {active.url && (
              <a href={active.url} className={`text-base ${linkClass}`}>
                Learn more about {active.title}
              </a>
            )}
          </div>
        </article>
      </div>

      {footer && (
        <div className="text-center text-base text-[#222] [&_a]:font-semibold [&_a]:text-black [&_a]:underline [&_a]:decoration-gold [&_a]:underline-offset-3">
          <RichText data={footer} />
        </div>
      )}
    </section>
  )
}
