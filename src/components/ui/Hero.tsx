type HeroProps = Extract<NonNullable<Page['components']>[number], { blockType: 'hero' }>

import type { Page } from '@/payload-types'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ArrowRight } from 'iconsax-reactjs'
import Button from './Button'

export default function Hero({ heading, ctaLabel, description, image, ctaLink }: HeroProps)  {
  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-charcoal xl:h-193">
      <Image
        src={image.url}
        alt="Freshly installed red tile roof on a two-story home, seen from above"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_50%] xl:object-[70%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.55)_0%,rgba(17,17,17,0.82)_55%,rgba(17,17,17,0.92)_100%)] xl:bg-[linear-gradient(90deg,rgba(17,17,17,0.88)_0%,rgba(17,17,17,0.72)_38%,rgba(17,17,17,0.15)_68%,rgba(17,17,17,0)_100%)]" />
      <div className="relative flex flex-col gap-5 px-5 pt-18 pb-12 xl:h-full xl:max-w-225 xl:justify-center xl:gap-7 xl:px-28 xl:py-0">
        <h1 className="text-[32px] leading-9.75 font-bold text-white uppercase xl:text-[52px] xl:leading-15.5">
          {heading}
        </h1>
        <div className="text-[15px] leading-6.25 text-linen xl:max-w-165 xl:text-[17px] xl:leading-7.25">
          {description && <RichText data={description} />}
        </div>
        <div className="flex pt-2 xl:pt-3">
          <Button
            variant="cta"
            href={ctaLink}
            icon={<ArrowRight size={20} color="#ffffff" aria-hidden="true" />}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
