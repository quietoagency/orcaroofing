import type { CSSProperties } from 'react'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import StepsPath from './StepsPath'

type Props = Extract<NonNullable<Page['components']>[number], { blockType: 'stepsSection' }>
type Variant = NonNullable<Props['variant']>

const WIDTH = 680
const ITEM_WIDTH = 230
const CENTER = WIDTH / 2
const START_Y = 40

const geometry = {
  dark: { row: 250, bottom: -40, startX: 110, radius: 125, turnLeft: 130, turnRight: 550, colLeft: 210, colRight: 470 },
  light: { row: 410, bottom: 30, startX: 30, radius: 100, turnLeft: 120, turnRight: 560, colLeft: 150, colRight: 450 },
} satisfies Record<Variant, object>

const theme = {
  dark: {
    section: 'bg-charcoal',
    heading: 'text-gold',
    text: 'text-sand',
    image: 'bg-steel-900',
    track: '#3a3a3a',
    badge: 'border-charcoal',
    stepBody: 'bg-charcoal',
    title: 'text-white',
    description: 'text-[#bdbdbd]',
  },
  light: {
    section: 'bg-[#f6f2ec]',
    heading: 'text-black',
    text: 'text-slate',
    image: 'bg-sand',
    track: '#e5dacc',
    badge: 'border-[#f6f2ec]',
    stepBody: '',
    title: 'text-black',
    description: 'text-slate',
  },
} satisfies Record<Variant, object>

function getLayout(count: number, variant: Variant) {
  const g = geometry[variant]
  const rows = Math.ceil(count / 2)
  const centers = Array.from({ length: count }, (_, i) => {
    const row = Math.floor(i / 2)
    const alone = i === count - 1 && i % 2 === 0
    const reversed = row % 2 === 1
    const x = alone ? CENTER : (i % 2 === 0) !== reversed ? g.colLeft : g.colRight
    return { x, y: START_Y + row * g.row }
  })

  const half = g.row === g.radius * 2
  let d = `M${g.startX} ${START_Y}`
  for (let row = 0; row < rows; row++) {
    const y = START_Y + row * g.row
    const reversed = row % 2 === 1
    if (row === rows - 1) {
      d += ` H${centers[count - 1].x}`
      continue
    }
    const turn = reversed ? g.turnLeft : g.turnRight
    const extreme = reversed ? turn - g.radius : turn + g.radius
    const sweep = reversed ? 0 : 1
    const arc = (toX: number, toY: number) => ` A${g.radius} ${g.radius} 0 0 ${sweep} ${toX} ${toY}`
    d += ` H${turn}`
    d += half
      ? arc(turn, y + g.row)
      : `${arc(extreme, y + g.radius)} V${y + g.row - g.radius}${arc(turn, y + g.row)}`
  }
  return { rows, centers, d, height: rows * g.row + g.bottom }
}

export default function StepsSection({ variant, heading, text, image, steps }: Props) {
  const v: Variant = variant ?? 'dark'
  const t = theme[v]
  const media = typeof image === 'object' ? image : null
  const { centers, d, height } = getLayout(steps.length, v)

  return (
    <section
      aria-label={heading}
      className={`flex flex-col gap-10 px-5 py-14 xl:flex-row xl:gap-18 xl:px-28 xl:py-26 ${t.section}`}
    >
      <div className="flex flex-col gap-8 xl:grow">
        <div className="flex flex-col items-start gap-4">
          <span className="h-1 w-16 bg-gold" />
          <h2 className={`text-[28px] leading-9 font-semibold xl:text-[40px] xl:leading-12.5 ${t.heading}`}>
            {heading}
          </h2>
          {text && <p className={`text-base leading-7 xl:text-[17px] ${t.text}`}>{text}</p>}
        </div>
        <div className={`relative h-80 overflow-hidden xl:h-auto xl:grow ${t.image}`}>
          {media?.url && (
            <Image
              src={media.url}
              alt={media.alt ?? heading}
              fill
              sizes="(min-width: 1280px) 464px, 100vw"
              className="object-cover"
            />
          )}
        </div>
      </div>

      <ol
        className="relative flex flex-col xl:block xl:h-(--h) xl:w-170 xl:shrink-0"
        style={{ '--h': `${height}px` } as CSSProperties}
      >
        <StepsPath
          d={d}
          width={WIDTH}
          height={height}
          startX={geometry[v].startX}
          startY={START_Y}
          trackColor={t.track}
        />
        {steps.map(({ id, title, description }, index) => (
          <li
            key={id}
            style={
              {
                '--x': `${centers[index].x - ITEM_WIDTH / 2}px`,
                '--y': `${centers[index].y - 32}px`,
              } as CSSProperties
            }
            className="relative flex gap-5 pb-8 before:absolute before:top-14 before:bottom-0 before:left-7 before:border-l before:border-dashed before:border-gold/60 last:pb-0 last:before:hidden xl:absolute xl:top-(--y) xl:left-(--x) xl:w-57.5 xl:flex-col xl:items-center xl:gap-4 xl:pb-0 xl:text-center xl:before:hidden"
          >
            <span
              className={`flex size-14 shrink-0 items-center justify-center rounded-full border-[6px] bg-gold text-base font-bold text-charcoal outline outline-gold xl:size-16 ${t.badge}`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className={`flex flex-col gap-1.5 pt-2 xl:px-1.5 xl:pt-0 ${t.stepBody}`}>
              <h3 className={`text-lg leading-6 font-semibold ${t.title}`}>{title}</h3>
              {description && <p className={`text-sm leading-5.5 ${t.description}`}>{description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
