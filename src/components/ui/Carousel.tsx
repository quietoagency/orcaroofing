'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, type ReactNode } from 'react'

type Props = {
  slides: ReactNode[]
  loop?: boolean
}

const MAX_COPIES = 5

export default function Carousel({ slides, loop = true }: Props) {
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop, dragFree: true }, [
    AutoScroll({ speed: 0.8, startDelay: 0, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])
  const [copies, setCopies] = useState(1)

  useEffect(() => {
    if (!emblaApi || !loop) return
    const ensureLoop = () => {
      if (!emblaApi.internalEngine().options.loop) {
        setCopies((current) => Math.min(current + 1, MAX_COPIES))
      }
    }
    ensureLoop()
    emblaApi.on('reInit', ensureLoop)
    return () => {
      emblaApi.off('reInit', ensureLoop)
    }
  }, [emblaApi, loop])

  useEffect(() => {
    if (!emblaApi) return
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      const autoScroll = emblaApi.plugins().autoScroll
      if (query.matches) autoScroll?.stop()
      else autoScroll?.play()
    }
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [emblaApi])

  const repeated = Array.from({ length: copies }, () => slides).flat()

  return (
    <div ref={viewportRef} className="overflow-hidden">
      <ul className="flex">
        {repeated.map((slide, i) => (
          <li
            key={i}
            aria-hidden={i >= slides.length || undefined}
            className="mr-6 min-w-0 flex-none first:ml-3"
          >
            {slide}
          </li>
        ))}
      </ul>
    </div>
  )
}
