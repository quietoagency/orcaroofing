import type { SVGProps } from 'react'

export default function RoofIcon({ size = 26, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M2 12 12 4l10 8" />
      <path d="M5 14.5 12 9l7 5.5" />
      <path d="M8 17l4-3 4 3" />
    </svg>
  )
}
