import { getPayload } from 'payload'
import config from '@payload-config'
import Hero from '@/components/ui/Hero'
import CardWithImageBackground from '@/components/ui/CardWithImageBackground'
import MapSection from '@/components/ui/MapSection'
import Reviews from '@/components/ui/Reviews'
import WhyUsBoxes from '@/components/ui/WhyUsBoxes'
import ChecklistWithImage from '@/components/ui/ChecklistWithImage'
import SimpleCardSection from '@/components/ui/SimpleCardSection'
import StepsSection from '@/components/ui/StepsSection'
import FaqSection from '@/components/ui/FaqSection'
import LocationCards from '@/components/ui/LocationCards'
import ServiceAreasList from '@/components/ui/ServiceAreasList'
import ServicesAndMaterialsSection from '@/components/ui/ServicesAndMaterialsSection'

export default async function HomePage(){
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: '/' } },
    limit: 1,
  })
  const page = docs[0]
  if (!page) return;
  return page.components?.map((block) => {
    switch (block.blockType) {
      case 'hero': return <Hero key={block.id} {...block} />
      case 'cardWithImageBackground': return <CardWithImageBackground key={block.id} {...block} />
      case 'mapSection': return <MapSection key={block.id} {...block} />
      case 'reviews': return <Reviews key={block.id} {...block} />
      case 'whyUsBoxes': return <WhyUsBoxes key={block.id} {...block} />
      case 'checklistWithImage': return <ChecklistWithImage key={block.id} {...block} />
      case 'simpleCardSection': return <SimpleCardSection key={block.id} {...block} />
      case 'stepsSection': return <StepsSection key={block.id} {...block} />
      case 'faqSection': return <FaqSection key={block.id} {...block} />
      case 'locationCards': return <LocationCards key={block.id} {...block} />
      case 'serviceAreasList': return <ServiceAreasList key={block.id} {...block} />
      case 'servicesAndMaterialsSection': return <ServicesAndMaterialsSection key={block.id} {...block} />
    }
  })
}
