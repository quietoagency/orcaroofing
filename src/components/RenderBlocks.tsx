import type { Page } from '@/payload-types'
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
import BlogPostsList from '@/components/ui/BlogPostsList'
import ServicesAndMaterialsSection from '@/components/ui/ServicesAndMaterialsSection'

type Props = {
  blocks: Page['components']
  searchParams?: { q?: string }
}

export default function RenderBlocks({ blocks, searchParams }: Props) {
  return blocks?.map((block) => {
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
      case 'blogPostsList': return <BlogPostsList key={block.id} q={searchParams?.q} />
      case 'servicesAndMaterialsSection': return <ServicesAndMaterialsSection key={block.id} {...block} />
    }
  })
}
