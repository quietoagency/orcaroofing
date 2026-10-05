import { getPayload } from 'payload'
import config from '@payload-config'
import RenderBlocks from '@/components/RenderBlocks'

export default async function HomePage(){
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: '/' } },
    limit: 1,
  })
  const page = docs[0]
  if (!page) return;
  return <RenderBlocks blocks={page.components} />
}

export const dynamic = 'force-dynamic'
