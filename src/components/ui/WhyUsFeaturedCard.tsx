import { icons, type IconName } from '@/lib/icons'

interface WhyUsFeaturedCardProps {
  title: string
  subtitle?: string | null
  icon: IconName
}

export default function WhyUsFeaturedCard({ title, subtitle, icon }: WhyUsFeaturedCardProps) {
  const Icon = icons[icon]
  return (
    <div className="flex items-center gap-5 bg-gold p-8 md:col-span-2 xl:gap-7">
      <span className="flex size-18 shrink-0 items-center justify-center rounded-full bg-charcoal text-gold">
        <Icon size={34} strokeWidth={1.8} />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-[22px] leading-7 font-bold text-black">{title}</h3>
        {subtitle && <p className="text-[15px] leading-6 text-charcoal">{subtitle}</p>}
      </div>
    </div>
  )
}
