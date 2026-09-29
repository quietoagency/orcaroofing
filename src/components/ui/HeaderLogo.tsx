import Image from "next/image"
import Link from "next/link"
import type { Media } from "@/payload-types"

export default function HeaderLogo({ logo }: { logo: Media | null }) {
  return (
    <div className="relative h-18 w-50 shrink-0 xl:h-32 xl:w-75 2xl:w-95">
      <div className="absolute inset-0 bg-gold [clip-path:polygon(0_0,100%_0,calc(100%-26px)_100%,0_100%)] xl:[clip-path:polygon(0_0,100%_0,calc(100%-48px)_100%,0_100%)]" />
      <div className="absolute inset-0 bg-linen [clip-path:polygon(0_0,calc(100%-8px)_0,calc(100%-34px)_100%,0_100%)] xl:[clip-path:polygon(0_0,calc(100%-14px)_0,calc(100%-62px)_100%,0_100%)]" />
      <Link
        href="/"
        aria-label="Orca Roofing & Exteriors - home"
        className="absolute inset-y-0 left-0 flex items-center pl-4 xl:pl-14"
      >
        {logo?.url && (
          <Image
            src={logo.url}
            alt={logo.alt}
            width={246}
            height={90}
            priority
            className="h-auto w-34.5 xl:w-46"
          />
        )}
      </Link>
    </div>
  )
}