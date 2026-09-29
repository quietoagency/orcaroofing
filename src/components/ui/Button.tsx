import type { AnchorHTMLAttributes, ReactNode } from 'react'

const variants = {
  call: {
    root: 'flex size-11 items-center justify-center rounded-full bg-gold text-charcoal xl:h-14 xl:w-auto xl:justify-start xl:gap-3 xl:py-8 xl:pr-8 xl:pl-6',
    icon: 'flex shrink-0 items-center justify-center xl:size-10 xl:rounded-full xl:bg-white',
  },
}

type ButtonVariant = keyof typeof variants

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: ButtonVariant
  href: string
  icon?: ReactNode
}

export default function Button({ variant, icon, className = '', children, ...props }: ButtonProps) {
  const styles = variants[variant]

  return (
    <a className={`${styles.root} ${className}`.trim()} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </a>
  )
}
