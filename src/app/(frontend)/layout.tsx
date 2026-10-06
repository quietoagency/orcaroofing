import React from 'react'
import './styles.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'
import { getSiteSettings, getSiteUrl } from '@/lib/seo'
import { draftMode } from 'next/headers'
import PreviewBanner from '@/components/PreviewBanner'
import { TrackingBody, TrackingHead } from '@/components/Tracking'

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSiteSettings()
  return {
    metadataBase: new URL(getSiteUrl(seo?.siteUrl)),
    title: seo?.siteName || 'Orca Roofing',
    description: seo?.defaultDescription || undefined,
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({config});
  const headerData = await payload.findGlobal({slug: 'header'})
  const footerData = await payload.findGlobal({slug: 'footer'})
  const siteSettings = await payload.findGlobal({slug: 'siteSettings'})
  const { isEnabled: isPreview } = await draftMode()

  return (
    <html lang="en">
      <body>
        <TrackingBody gtmId={siteSettings.tracking?.gtmId} />
        <Header data={headerData} settings={siteSettings} />
        <main>{children}</main>
        <Footer
          data={footerData}
          settings={siteSettings}
          logo={typeof headerData.logo === 'object' ? headerData.logo : null}
        />
        <TrackingHead {...siteSettings.tracking} />
        {isPreview && <PreviewBanner />}
      </body>
    </html>
  )
}

export const dynamic = 'force-dynamic'
