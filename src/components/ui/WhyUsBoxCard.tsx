import { icons, type IconName } from '@/lib/icons'

interface WhyUsBoxCardProps {
  title: string
  subtitle?: string | null
  icon: IconName
}

export default function WhyUsBoxCard({ title, subtitle, icon }: WhyUsBoxCardProps) {
  const Icon = icons[icon]
  return (
    <div className="flex flex-col gap-5 border border-[#333] bg-[#1c1c1c] p-8">
      <span className="text-gold">
        <Icon />
      </span>
      <h3 className="text-[19px] leading-6.5 font-semibold text-white">{title}</h3>
      {subtitle && <p className="text-[15px] leading-6 text-[#bdbdbd]">{subtitle}</p>}
    </div>
  )
}
