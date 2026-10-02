import { getPayload } from 'payload'
import config from '@payload-config'
import RenderBlocks from '@/components/RenderBlocks'

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ q?: string }> }){
  const { q } = await searchParams
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'blog' } },
    limit: 1,
  })
  const page = docs[0]
  if (!page) return;
  return <RenderBlocks blocks={page.components} searchParams={{ q }} />
}
