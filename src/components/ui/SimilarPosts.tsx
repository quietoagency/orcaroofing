import { getPayload } from 'payload'
import config from '@payload-config'
import { ArrowRight } from 'iconsax-reactjs'
import BlogPostCard from './BlogPostCard'

type Props = {
  currentId: number
  category?: 'Roofing' | 'Decks' | null
}

export default async function SimilarPosts({ currentId, category }: Props) {
  if (!category) return null

  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    sort: '-publishedAt',
    limit: 4,
    pagination: false,
    where: {
      and: [{ category: { equals: category } }, { id: { not_equals: currentId } }],
    },
  })

  if (posts.length === 0) return null

  return (
    <section
      aria-label="Similar posts"
      className="flex flex-col gap-8 bg-[#f6f2ec] px-5 py-14 xl:gap-10 xl:px-28 xl:py-20"
    >
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col items-start gap-4">
          <span className="h-1 w-16 bg-gold" />
          <h2 className="text-[28px] leading-9 font-semibold text-black xl:text-[32px]">Similar posts</h2>
        </div>
        <a href="/blog" className="flex items-center gap-2 text-sm font-medium text-black">
          View all posts
          <ArrowRight size={16} color="#8a6a3b" aria-hidden="true" />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} category={post.category ?? undefined} />
        ))}
      </div>
    </section>
  )
}
