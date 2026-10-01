import type { SVGProps } from 'react'

export default function WindowIcon({ size = 26, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M4 3h16v18H4z" />
      <path d="M12 3v18" />
      <path d="M4 12h16" />
    </svg>
  )
}
