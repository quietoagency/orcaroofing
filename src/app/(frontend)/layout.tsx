import React from 'react'
import './styles.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({config});
  const headerData = await payload.findGlobal({slug: 'header'})
  const footerData = await payload.findGlobal({slug: 'footer'})
  const siteSettings = await payload.findGlobal({slug: 'siteSettings'})

  return (
    <html lang="en">
      <body>
        <Header data={headerData} settings={siteSettings} />
        <main>{children}</main>
        <Footer
          data={footerData}
          settings={siteSettings}
          logo={typeof headerData.logo === 'object' ? headerData.logo : null}
        />
      </body>
    </html>
  )
}

export const dynamic = 'force-dynamic'
