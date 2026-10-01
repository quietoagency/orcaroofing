import type { SVGProps } from 'react'

export default function SidingIcon({ size = 26, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M3 10 12 3l9 7v11H3z" />
      <path d="M3 14h18" />
      <path d="M3 17.5h18" />
      <path d="M7.5 10.5h9" />
    </svg>
  )
}
