import type { Page } from '@/payload-types'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ArrowRight } from 'iconsax-reactjs'
import Button from './Button'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'cardWithImageBackground' }>

export default function CardWithImageBackground({ title, text, image, ctaTitle, ctaLink }: Props) {
  const media = typeof image === 'object' ? image : null

  return (
    <section
      aria-label="Card with image background"
      className="relative flex items-center justify-end overflow-hidden bg-charcoal px-5 py-14 xl:h-180 xl:px-28 xl:py-0"
    >
      {media?.url && (
        <Image
          src={media.url}
          alt={media.alt ?? ''}
          fill
          sizes="100vw"
          className="object-cover object-[30%_50%]"
        />
      )}
      <div className="absolute inset-0 bg-charcoal/35" />
      <div className="relative flex w-full flex-col gap-6 bg-white p-8 xl:w-150 xl:p-14">
        <span className="h-1 w-16 bg-gold" />
        <h2 className="text-[28px] leading-9 font-semibold text-black xl:text-[40px] xl:leading-12.5">
          {title}
        </h2>
        {text && (
          <div className="text-base text-left leading-7 text-[#222] xl:text-[17px] xl:leading-7.25 [&_p]:text-left! [&_a]:font-semibold [&_a]:text-black [&_a]:underline [&_a]:decoration-gold [&_a]:decoration-2 [&_a]:underline-offset-3">
            <RichText data={text} />
          </div>
        )}
        {ctaTitle && (
          <div className="flex pt-2">
            <Button
              variant="cta"
              href={ctaLink || '#'}
              icon={<ArrowRight size={20} color="#ffffff" aria-hidden="true" />}
            >
              {ctaTitle}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
