'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string
      callback: (token: string) => void
      'expired-callback': () => void
      'error-callback': () => void
    },
  ) => string
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

type Props = {
  onToken: (token: string | null) => void
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

export default function TurnstileWidget({ onToken }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const onTokenRef = useRef(onToken)

  useEffect(() => {
    onTokenRef.current = onToken
  }, [onToken])

  const renderWidget = () => {
    if (!siteKey || !containerRef.current || !window.turnstile || widgetIdRef.current) return
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token) => onTokenRef.current(token),
      'expired-callback': () => onTokenRef.current(null),
      'error-callback': () => onTokenRef.current(null),
    })
  }

  useEffect(() => {
    renderWidget()
    return () => {
      if (widgetIdRef.current && window.turnstile) window.turnstile.remove(widgetIdRef.current)
      widgetIdRef.current = null
    }
  }, [])

  if (!siteKey) {
    return (
      <div
        role="group"
        aria-label="CAPTCHA"
        className="flex h-16 w-65 items-center justify-center rounded-lg border border-dashed border-sand bg-[#f6f2ec] px-3 text-center text-xs text-slate"
      >
        Set NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable the captcha
      </div>
    )
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <div ref={containerRef} className="min-h-16.25" />
    </>
  )
}
