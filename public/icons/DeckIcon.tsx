import type { SVGProps } from 'react'

export default function DeckIcon({ size = 26, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M3 8h18" />
      <path d="M3 14h18" />
      <path d="M3 20h18" />
      <path d="M5 8v12" />
      <path d="M19 8v12" />
      <path d="M9 14v6" />
      <path d="M12 14v6" />
      <path d="M15 14v6" />
    </svg>
  )
}
