import type { SVGProps } from 'react'

export default function RoofCleaningIcon({ size = 26, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M2 13 12 5l10 8" />
      <path d="M12 13v6" />
      <path d="M9 16h6" />
      <path d="M19 2v4" />
      <path d="M17 4h4" />
      <path d="M5 18v3" />
      <path d="M3.5 19.5h3" />
    </svg>
  )
}
