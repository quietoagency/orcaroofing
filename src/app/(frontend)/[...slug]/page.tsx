import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import RenderBlocks from '@/components/RenderBlocks'

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const fullSlug = slug.map(decodeURIComponent).join('/')
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: fullSlug } },
    limit: 1,
  })
  const page = docs[0]
  if (!page) notFound()
  return <RenderBlocks blocks={page.components} />
}

export const dynamic = 'force-dynamic'
