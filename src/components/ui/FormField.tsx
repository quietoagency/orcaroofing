import type { ReactNode } from 'react'
import RequiredMark from './RequiredMark'

type Props = {
  id: string
  label: string
  required?: boolean
  children: ReactNode
}

export const labelTextClass = 'text-sm leading-5 font-semibold text-black'

export default function FormField({ id, label, required, children }: Props) {
  return (
    <label htmlFor={id} className="flex min-w-0 flex-1 flex-col gap-2">
      <span className={labelTextClass}>
        {label}
        {required && <RequiredMark />}
      </span>
      {children}
    </label>
  )
}
