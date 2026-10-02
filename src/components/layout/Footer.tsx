import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'iconsax-reactjs'
import type { Footer as FooterData, SiteSetting, Media } from '@/payload-types'
import { socialIcons } from '@/lib/icons'

interface FooterProps {
  data: FooterData
  settings: SiteSetting
  logo: Media | null
}

const DESCRIPTION =
  'Our mission is to deliver unmatched roofing and exterior services to the Pacific Northwest.'

const SOCIALS = [
  { platform: 'facebook', label: 'Facebook', url: '#' },
  { platform: 'tiktok', label: 'TikTok', url: '#' },
  { platform: 'youtube', label: 'YouTube', url: '#' },
  { platform: 'instagram', label: 'Instagram', url: '#' },
  { platform: 'yelp', label: 'Yelp', url: '#' },
  { platform: 'linkedin', label: 'LinkedIn', url: '#' },
  { platform: 'x', label: 'X', url: '#' },
] as const

const headingClass = 'text-xs font-semibold tracking-[0.16em] text-slate uppercase'

export function Footer({ data, settings, logo }: FooterProps) {
  const { links } = data
  const { offices, phone, email } = settings

  return (
    <footer className="flex flex-col border-t border-sand bg-[#f6f2ec]">
      <div className="flex flex-col gap-12 px-5 pt-14 xl:gap-16 xl:px-28 xl:pt-24">
        <div className="flex flex-col gap-10 xl:flex-row xl:gap-16">
          <div className="flex flex-col gap-7 xl:w-115 xl:shrink-0">
            <Link href="/" aria-label="Orca Roofing & Exteriors - home" className="flex">
              {logo?.url && (
                <Image
                  src={logo.url}
                  alt={logo.alt}
                  width={220}
                  height={80}
                  className="h-auto w-44 xl:w-55"
                />
              )}
            </Link>
            <p className="max-w-100 text-base leading-7 text-slate xl:text-[17px] xl:leading-7.25">
              {DESCRIPTION}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map(({ platform, label, url }) => {
                const Icon = socialIcons[platform]
                return (
                  <a
                    key={platform}
                    href={url}
                    aria-label={`Orca Roofing on ${label}`}
                    className="flex size-11 items-center justify-center rounded-full border border-sand bg-white text-[#333] transition-colors hover:text-gold-dark"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex grow flex-col gap-5">
            <div className={headingClass}>Contact Us</div>
            <div className="flex flex-col gap-1 text-base leading-7.5 text-[#222]">
              {offices?.map(({ id, address }) => (
                <span key={id}>{address}</span>
              ))}
              {phone && (
                <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="mt-3 font-semibold text-black">
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="font-semibold text-black">
                  {email}
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 xl:w-55 xl:shrink-0">
            <div className={headingClass}>Explore</div>
            <nav aria-label="Footer" className="flex flex-col gap-1">
              {links?.map(({ id, label, href }) => (
                <Link
                  key={id}
                  href={href}
                  className="text-base leading-7.5 text-[#222] transition-colors hover:text-gold-dark"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-sand py-7 xl:flex-row xl:items-center xl:justify-between xl:pb-0">
          <span className="text-[15px] text-slate">
            © {new Date().getFullYear()} All Rights Reserved. |{' '}
            <Link href="#" className="underline underline-offset-3">
              Privacy Policy
            </Link>
          </span>
          <Link href="#" className="flex items-center gap-2 text-base font-semibold text-black">
            Contact Us
            <ArrowRight size={18} color="currentColor" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="relative mt-auto aspect-[24/5] w-full overflow-hidden">
        <Image
          src="/images/seattle-skyline.svg"
          alt="Hand-drawn black and white sketch of the Seattle skyline with the Space Needle, Pike Place Market sign, the Great Wheel, a ferry and an orca tail in Elliott Bay"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>
    </footer>
  )
}
