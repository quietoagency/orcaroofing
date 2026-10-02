export type ArticleHeading = {
  id: string
  text: string
}

type Props = {
  headings: ArticleHeading[]
}

export default function InThisArticle({ headings }: Props) {
  if (headings.length === 0) return null

  return (
    <nav aria-label="In this article" className="flex flex-col gap-5 border border-sand bg-white p-6">
      <h2 className="text-xs font-semibold tracking-[0.14em] text-steel-900 uppercase">
        In this article
      </h2>
      <ol className="flex flex-col gap-4">
        {headings.map(({ id, text }, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="flex items-start gap-3 text-[13px] leading-5 font-medium text-[#222] transition-colors hover:text-gold-dark"
            >
              <span className="shrink-0 text-[11px] leading-5 font-semibold text-gold-dark">
                {String(i + 1).padStart(2, '0')}
              </span>
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
