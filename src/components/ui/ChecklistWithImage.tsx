import Image from 'next/image'
import type { Page } from '@/payload-types'
import { ArrowRight, Check } from 'iconsax-reactjs'
import Button from './Button'
import ShieldCheckIcon from '../../../public/icons/ShieldCheckIcon'

type Props = Extract<
  NonNullable<Page['components']>[number],
  { blockType: 'checklistWithImage' }
>

export default function ChecklistWithImage({
  heading,
  subheading,
  image,
  items,
  ctaLabel,
  ctaLink,
}: Props) {
  const media = typeof image === 'object' ? image : null

  return (
    <section
      aria-label={heading}
      className="flex flex-col gap-10 bg-[#f6f2ec] px-5 py-14 xl:flex-row xl:gap-20 xl:px-28 xl:py-26"
    >
      <div className="flex flex-col gap-8 xl:w-140 xl:shrink-0">
        <div className="flex flex-col items-start gap-4">
          <span className="h-1 w-16 bg-gold" />
          <h2 className="text-[28px] leading-9 font-semibold text-black xl:text-[40px] xl:leading-12.5">
            {heading}
          </h2>
        </div>
        {subheading && <p className="text-base leading-7 text-slate xl:text-[17px] xl:leading-7.25">{subheading}</p>}
        <div className="relative h-96 grow overflow-hidden bg-sand xl:h-auto">
          {media?.url && (
            <Image
              src={media.url}
              alt={media.alt ?? heading}
              fill
              sizes="(min-width: 1280px) 560px, 100vw"
              className="object-cover"
            />
          )}
        </div>
        {ctaLabel && (
          <div className="flex">
            <Button
              variant="cta"
              href={ctaLink || '#'}
              icon={<ArrowRight size={20} color="#ffffff" aria-hidden="true" />}
            >
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>

      <div className="flex grow flex-col justify-center">
        <ul className="border-t border-sand">
          {items.map(({ id, title, text }) => (
            <li key={id} className="flex gap-4.5 border-b border-sand py-4.5">
              <span className="flex size-8.5 shrink-0 items-center justify-center rounded-full bg-linen text-gold-dark">
                <Check size={18} color="currentColor" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1 pt-1">
                <h3 className="text-[19px] leading-6.5 font-semibold text-black">{title}</h3>
                <p className="text-[15px] leading-6 text-slate">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
