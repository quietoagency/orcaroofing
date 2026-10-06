import { Brush2, CardPos, Glass, Messages, Notification, Shield, Stickynote } from 'iconsax-reactjs'
import type { ComponentType, SVGProps } from 'react'
import CheckCircleIcon from '../../public/icons/CheckCircleIcon'
import CertifiedIcon from '../../public/icons/CertifiedIcon'
import DeckIcon from '../../public/icons/DeckIcon'
import DocumentCheckIcon from '../../public/icons/DocumentCheckIcon'
import GutterIcon from '../../public/icons/GutterIcon'
import LocationHeartIcon from '../../public/icons/LocationHeartIcon'
import MeditationIcon from '../../public/icons/MeditationIcon'
import MoneyIcon from '../../public/icons/MoneyIcon'
import RoofCleaningIcon from '../../public/icons/RoofCleaningIcon'
import RoofIcon from '../../public/icons/RoofIcon'
import RoofInsulationIcon from '../../public/icons/RoofInsulationIcon'
import RoofRepairIcon from '../../public/icons/RoofRepairIcon'
import RoofReplacementIcon from '../../public/icons/RoofReplacementIcon'
import ShieldCheckIcon from '../../public/icons/ShieldCheckIcon'
import SidingIcon from '../../public/icons/SidingIcon'
import SmileIcon from '../../public/icons/SmileIcon'
import StarIcon from '../../public/icons/StarIcon'
import WindowIcon from '../../public/icons/WindowIcon'
import FacebookIcon from '../../public/icons/FacebookIcon'
import TikTokIcon from '../../public/icons/TikTokIcon'
import YouTubeIcon from '../../public/icons/YouTubeIcon'
import InstagramIcon from '../../public/icons/InstagramIcon'
import YelpIcon from '../../public/icons/YelpIcon'
import LinkedInIcon from '../../public/icons/LinkedInIcon'
import XIcon from '../../public/icons/XIcon'

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>

export const icons = {
  bell: Notification,
  certified: CertifiedIcon,
  checkCircle: CheckCircleIcon,
  deck: DeckIcon,
  documentCheck: DocumentCheckIcon,
  glasses: Glass,
  gutter: GutterIcon,
  locationHeart: LocationHeartIcon,
  meditation: MeditationIcon,
  messages: Messages,
  money: MoneyIcon,
  paintBrush: Brush2,
  paymentCard: CardPos,
  roof: RoofIcon,
  roofCleaning: RoofCleaningIcon,
  roofInsulation: RoofInsulationIcon,
  roofRepair: RoofRepairIcon,
  roofReplacement: RoofReplacementIcon,
  shieldCheck: ShieldCheckIcon,
  shield: Shield,
  siding: SidingIcon,
  smile: SmileIcon,
  star: StarIcon,
  stickyNote: Stickynote,
  window: WindowIcon,
} satisfies Record<string, IconComponent>

export type IconName = keyof typeof icons

const toLabel = (name: string) =>
  name.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())

export const iconOptions = (Object.keys(icons) as IconName[]).map((value) => ({
  label: toLabel(value),
  value,
}))

export const socialIcons = {
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  yelp: YelpIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
} satisfies Record<string, IconComponent>
