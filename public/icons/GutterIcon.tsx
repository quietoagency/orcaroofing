import type { SVGProps } from 'react'

export default function GutterIcon({ size = 26, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M3 5h15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M14 11v4a3 3 0 0 0 3 3h4" />
      <path d="M21 15v6" />
    </svg>
  )
}
