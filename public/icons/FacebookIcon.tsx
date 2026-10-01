import type { SVGProps } from 'react'

export default function FacebookIcon({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M14 8h2V5h-2.5C11 5 10 6.6 10 9v2H8v3h2v7h3v-7h2.4l.6-3h-3V9.2c0-.8.3-1.2 1-1.2z" fill="currentColor" stroke="none" />
    </svg>
  )
}
