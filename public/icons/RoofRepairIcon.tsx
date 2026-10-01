import type { SVGProps } from 'react'

export default function RoofRepairIcon({ size = 26, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M2 11 12 3l10 8" />
      <path d="m7 21 6-6" />
      <path d="m12 13.5 3.5-3.5 3 3-3.5 3.5z" />
    </svg>
  )
}
