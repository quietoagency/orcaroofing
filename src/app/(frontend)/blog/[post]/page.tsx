import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import BlogRichText from '@/components/BlogRichText'
import InThisArticle from '@/components/ui/InThisArticle'
import PostHeader from '@/components/ui/PostHeader'
import BlogCta from '@/components/ui/BlogCta'
import SimilarPosts from '@/components/ui/SimilarPosts'
import FaqSection from '@/components/ui/FaqSection'
import { getHeadings } from '@/lib/getHeadings'
import JsonLd from '@/components/JsonLd'
import { publishedQuery } from '@/lib/published'
import { buildMetadata, getSiteSettings, handleRedirect } from '@/lib/seo'

type Params = { params: Promise<{ post: string }> }

async function getPost(slug: string) {
  const payload = await getPayload({ config })
  const { draft, where } = await publishedQuery({ slug: { equals: slug } })
  const { docs } = await payload.find({ collection: 'posts', where, draft, limit: 1 })
  return docs[0]
}

export async function generateMetadata({ params }: Params) {
  const { post: slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return buildMetadata(post, await getSiteSettings(), `/blog/${slug}`, 'article')
}

export default async function BlogPostPage({ params }: Params) {
  const { post: slug } = await params
  await handleRedirect(`/blog/${slug}`)
  const post = await getPost(slug)
  if (!post) notFound()
  return (
    <>
      <JsonLd items={post.seo?.jsonLd} />
      <PostHeader post={post} />
      <div className="grid grid-cols-1 gap-12 bg-white px-5 py-10 xl:grid-cols-[minmax(0,1fr)_320px] xl:px-28 xl:py-16">
        <article className="prose max-w-none">
          <BlogRichText data={post.content} />
        </article>
        <aside className="max-xl:contents xl:sticky xl:top-8 xl:flex xl:flex-col xl:gap-6 xl:self-start">
          <div className="max-xl:order-first empty:hidden">
            <InThisArticle headings={getHeadings(post.content)} />
          </div>
          <BlogCta
            heading={post.cta?.heading || undefined}
            description={post.cta?.description || undefined}
            ctaLabel={post.cta?.ctaLabel || undefined}
            ctaHref={post.cta?.ctaLink || undefined}
          />
        </aside>
      </div>
      {post.postFaq?.title && !!post.postFaq.questions?.length && (
        <FaqSection
          heading={post.postFaq.title}
          image={post.postFaq.image}
          questions={post.postFaq.questions}
        />
      )}
      <SimilarPosts currentId={post.id} category={post.category} />
    </>
  )
}

export const dynamic = 'force-dynamic'
