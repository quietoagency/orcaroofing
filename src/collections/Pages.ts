import { HeroBlock } from "@/blocks/Hero";
import { ServicesAndMaterialsSectionBlock } from "@/blocks/ServicesAndMaterialsSection";
import { WhyUsBoxesBlock } from "@/blocks/WhyUsBoxes";
import { CardWithImageBackgroundBlock } from "@/blocks/CardWithImageBackground";
import { ReviewsBlock } from "@/blocks/Reviews";
import { MapSectionBlock } from "@/blocks/MapSection";
import { ChecklistWithImageBlock } from "@/blocks/ChecklistWithImage";
import { SimpleCardSectionBlock } from "@/blocks/SimpleCardSection";
import { StepsSectionBlock } from "@/blocks/StepsSection";
import { FaqSectionBlock } from "@/blocks/FaqSection";
import { LocationCardsBlock } from "@/blocks/LocationCards";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields:[
    {name:'title', type: 'text', required: true},
    {name: 'slug', type: 'text', required: true, unique: true, index: true },
    {name: 'components', type: 'blocks', blocks:[HeroBlock, ServicesAndMaterialsSectionBlock, WhyUsBoxesBlock, CardWithImageBackgroundBlock, ReviewsBlock, MapSectionBlock, ChecklistWithImageBlock, SimpleCardSectionBlock, StepsSectionBlock, FaqSectionBlock, LocationCardsBlock]}
  ]
}