import { getPayload } from 'payload'
import config from '@payload-config'
import RenderBlocks from '@/components/RenderBlocks'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log(slug)
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const page = docs[0]
  if (!page) return;
  return <RenderBlocks blocks={page.components} />
}

export const dynamic = 'force-dynamic'
