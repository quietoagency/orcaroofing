import type { SVGProps } from 'react'

export default function LocationHeartIcon({ size = 32, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      <path d="M12 19s-6-5-6-9.5a6 6 0 0 1 12 0C18 14 12 19 12 19z" />
      <path d="M12 12.5 9.8 10.3a1.5 1.5 0 0 1 2.2-2 1.5 1.5 0 0 1 2.2 2z" />
      <path d="M8.5 19.8c-1.2.4-2 .9-2 1.4 0 .9 2.5 1.6 5.5 1.6s5.5-.7 5.5-1.6c0-.5-.8-1-2-1.4" />
    </svg>
  )
}
