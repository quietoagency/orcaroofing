import type { SVGProps } from 'react'

export default function CertifiedIcon({ size = 32, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 21l5-3 5 3-1.5-7" />
    </svg>
  )
}
