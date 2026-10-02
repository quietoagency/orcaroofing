import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import BlogRichText from '@/components/BlogRichText'
import InThisArticle from '@/components/ui/InThisArticle'
import PostHeader from '@/components/ui/PostHeader'
import BlogCta from '@/components/ui/BlogCta'
import { getHeadings } from '@/lib/getHeadings'

export default async function BlogPostPage({ params }: { params: Promise<{ post: string }> }) {
  const { post: slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const post = docs[0]
  if (!post) notFound()
  return (
    <>
      <PostHeader post={post} />
      <div className="grid grid-cols-1 gap-12 bg-white px-5 py-10 xl:grid-cols-[minmax(0,1fr)_320px] xl:px-28 xl:py-16">
        <article className="prose max-w-none">
          <BlogRichText data={post.content} />
        </article>
        <aside className="flex flex-col gap-6 xl:sticky xl:top-8 xl:self-start">
          <InThisArticle headings={getHeadings(post.content)} />
          <BlogCta
            heading={post.cta?.heading || undefined}
            description={post.cta?.description || undefined}
            ctaLabel={post.cta?.ctaLabel || undefined}
            ctaHref={post.cta?.ctaLink || undefined}
          />
        </aside>
      </div>
    </>
  )
}
