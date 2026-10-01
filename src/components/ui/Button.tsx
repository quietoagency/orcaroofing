import type { AnchorHTMLAttributes, ReactNode } from 'react'

const variants = {
  call: {
    root: 'flex size-11 items-center justify-center rounded-full bg-gold text-charcoal xl:h-14 xl:w-auto xl:justify-start xl:gap-3 xl:py-8 xl:pr-8 xl:pl-6',
    icon: 'flex shrink-0 items-center justify-center xl:size-10 xl:rounded-full xl:bg-white',
    iconAfter: false,
  },
  cta: {
    root: 'flex h-14 items-center gap-3.5 rounded-full bg-gold py-0 pr-2 pl-7 text-base font-semibold text-black xl:h-16 xl:text-[17px]',
    icon: 'flex size-10 shrink-0 items-center justify-center rounded-full bg-charcoal xl:size-11',
    iconAfter: true,
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
      {!styles.iconAfter && icon && <span className={styles.icon}>{icon}</span>}
      {children}
      {styles.iconAfter && icon && <span className={styles.icon}>{icon}</span>}
    </a>
  )
}
