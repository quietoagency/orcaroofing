import type { SVGProps } from 'react'

export default function RoofReplacementIcon({ size = 26, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M15.5 16A4 4 0 1 1 14.5 12.5" />
      <path d="M15.5 12.5V16H12" />
    </svg>
  )
}
