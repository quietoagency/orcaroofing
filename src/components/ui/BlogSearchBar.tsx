import { SearchNormal } from 'iconsax-reactjs'

type Props = {
  defaultValue?: string
}

export default function BlogSearchBar({ defaultValue }: Props) {
  return (
    <form
      role="search"
      action="/blog"
      method="get"
      className="mx-auto flex h-15 w-full items-center gap-3 rounded-full border border-sand bg-white py-1.5 pr-1.5 pl-6 xl:w-140"
    >
      <label htmlFor="blog-search" className="sr-only">
        Search our blog
      </label>
      <input
        id="blog-search"
        name="q"
        type="search"
        defaultValue={defaultValue}
        placeholder="Search our blog"
        className="h-full min-w-0 grow bg-transparent text-base text-[#222] outline-none"
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-charcoal"
      >
        <SearchNormal size={20} color="#bb945b" aria-hidden="true" />
      </button>
    </form>
  )
}
