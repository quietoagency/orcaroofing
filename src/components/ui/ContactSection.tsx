import Image from 'next/image'
import { Call, Location, Sms, ShieldTick } from 'iconsax-reactjs'
import type { ReactNode } from 'react'
import ContactForm from './ContactForm'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Page, Media } from '@/payload-types'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'contactSection' }>

const iconWrapClass =
  'flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold'
const labelClass = 'text-[13px] leading-4 font-semibold tracking-[0.14em] text-gold uppercase'
const valueClass = 'text-base leading-6.5 font-medium text-white'

function InfoItem({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className={iconWrapClass}>{icon}</span>
      <div className="flex flex-col gap-2 pt-0.5">
        <span className={labelClass}>{label}</span>
        {children}
      </div>
    </div>
  )
}

export default async function ContactSection({ heading, description, image }: Props) {
  const payload = await getPayload({ config })
  const { offices, phone: telephone, email, license } = await payload.findGlobal({ slug: 'siteSettings' })
  const imageUrl = typeof image === 'object' ? (image as Media).url : null
  return (
    <section aria-label="Contact" className="relative overflow-hidden bg-charcoal xl:min-h-320">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_50%]"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.88)_0%,rgba(17,17,17,0.8)_100%)] xl:bg-[linear-gradient(90deg,rgba(17,17,17,0.92)_0%,rgba(17,17,17,0.8)_45%,rgba(17,17,17,0.45)_100%)]" />
      <div className="relative flex flex-col gap-12 px-5 pt-18 pb-12 xl:min-h-320 xl:flex-row xl:items-start xl:gap-20 xl:px-28 xl:py-22">
        <div className="flex flex-col gap-10 xl:grow xl:gap-12">
          <div className="flex flex-col gap-5 xl:gap-7">
            <h1 className="text-[32px] leading-9.75 font-bold text-white uppercase xl:text-[44px] xl:leading-13.5">
              {heading}
            </h1>
            {description && (
              <p className="text-[15px] leading-6.25 text-linen xl:max-w-140 xl:text-[17px] xl:leading-7.25">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-8 border-t border-white/18 pt-8 xl:pt-10">
            {offices && offices.length > 0 && (
              <InfoItem icon={<Location size={20} color="currentColor" aria-hidden="true" />} label="Our offices">
                <address className={`${valueClass} flex flex-col gap-1.5 not-italic`}>
                  {offices.map(({ id, address }) => (
                    <span key={id}>{address}</span>
                  ))}
                </address>
              </InfoItem>
            )}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6">
              {telephone && (
                <InfoItem icon={<Call size={20} color="currentColor" aria-hidden="true" />} label="Call us">
                  <a href={`tel:${telephone.replace(/[^\d+]/g, '')}`} className={`${valueClass} hover:text-gold`}>
                    {telephone}
                  </a>
                </InfoItem>
              )}
              {email && (
                <InfoItem icon={<Sms size={20} color="currentColor" aria-hidden="true" />} label="Email us">
                  <a href={`mailto:${email}`} className={`${valueClass} break-all hover:text-gold`}>
                    {email}
                  </a>
                </InfoItem>
              )}
              {license && (
                <InfoItem icon={<ShieldTick size={20} color="currentColor" aria-hidden="true" />} label="Licensed">
                  <span className={valueClass}>{license}</span>
                </InfoItem>
              )}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
