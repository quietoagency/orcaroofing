import type { SVGProps } from 'react'

export default function YelpIcon({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M11 4v8" />
      <path d="m12 13 6-2" />
      <path d="m12 14 4 5" />
      <path d="m11 14-3 5" />
      <path d="m10 13-5-2" />
    </svg>
  )
}
