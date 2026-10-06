import { getPayload } from 'payload'
import config from '@payload-config'
import { publishedQuery } from '@/lib/published'
import FeaturedPost from './FeaturedPost'
import BlogSearchBar from './BlogSearchBar'
import BlogPostCard from './BlogPostCard'

type Props = {
  q?: string
}

export default async function BlogPostsList({ q }: Props) {
  const payload = await getPayload({ config })
  const { draft, where } = await publishedQuery(
    q ? { or: [{ title: { like: q } }, { excerpt: { like: q } }] } : undefined,
  )
  const { docs: posts } = await payload.find({
    collection: 'posts',
    sort: '-publishedAt',
    limit: 0,
    pagination: false,
    draft,
    where,
  })

  const featured = q ? undefined : posts[0]
  const rest = q ? posts : posts.slice(1)

  return (
    <section
      aria-label="Blog posts"
      className="flex flex-col gap-12 bg-[#f6f2ec] px-5 py-14 xl:px-28 xl:pt-20 xl:pb-26"
    >
      {featured && <FeaturedPost post={featured} />}
      <BlogSearchBar defaultValue={q} />
      {rest.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {rest.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        !featured && (
          <p className="text-center text-base text-slate">
            {q ? `No posts found for "${q}".` : 'No posts yet.'}
          </p>
        )
      )}
    </section>
  )
}
