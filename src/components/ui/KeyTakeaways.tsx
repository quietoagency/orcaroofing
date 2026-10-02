import { TickCircle } from 'iconsax-reactjs'

type Props = {
  title?: string | null
  items: { id?: string | null; text: string }[]
}

export default function KeyTakeaways({ title, items }: Props) {
  return (
    <aside aria-label={title ?? 'Key takeaways'} className="not-prose my-8 flex flex-col gap-5 bg-linen/60 p-6 xl:p-8">
      <div className="flex items-center gap-3">
        <span className="h-0.5 w-8 bg-gold-dark" />
        <span className="text-xs font-semibold tracking-[0.14em] text-steel-900 uppercase">
          {title}
        </span>
      </div>
      <ul className="flex flex-col gap-3.5">
        {items.map(({ id, text }, i) => (
          <li key={id ?? i} className="flex items-start gap-3 text-[15px] leading-6 text-[#222]">
            <TickCircle size={20} color="#8a6a3b" className="mt-0.5 shrink-0" aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>
    </aside>
  )
}
