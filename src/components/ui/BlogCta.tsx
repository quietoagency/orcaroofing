import { ArrowRight } from 'iconsax-reactjs'
import Button from './Button'

type Props = {
  heading?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function BlogCta({
  heading,
  description,
  ctaLabel,
  ctaHref = '/contact-us',
}: Props) {
  return (
    <aside aria-label={heading} className="flex flex-col gap-4 bg-charcoal p-6 xl:p-7">
      <span className="h-0.5 w-8 bg-gold" />
      <h2 className="text-xl leading-7 font-semibold text-white">{heading}</h2>
      <p className="text-sm leading-6 text-[#bdbdbd]">{description}</p>
      <div className="flex pt-2">
        <Button
          variant='cta'
          href={ctaHref}
          icon={<ArrowRight size={18} color="#ffffff" aria-hidden="true" />}
        >
          {ctaLabel}
        </Button>
      </div>
    </aside>
  )
}
