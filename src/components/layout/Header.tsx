'use client'

import HeaderLogo from '../ui/HeaderLogo'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../ui/Button'
import { Call, CloseCircle, HamburgerMenu, ShieldTick } from 'iconsax-reactjs'
import type { Header as HeaderData } from '@/payload-types'

interface HeaderProps {
  data: HeaderData
}

export function Header({ data }: HeaderProps) {
  const { phone, license, logo, navLinks } = data
  const logoMedia = typeof logo === 'object' ? logo : null
  const [open, setOpen] = useState(false)
  const MenuIcon = open ? CloseCircle : HamburgerMenu

  return (
    <header className="relative flex border-b border-sand bg-white">
      <HeaderLogo logo={logoMedia} />
      <div className="hidden grow flex-col px-6 xl:flex">
        <div className="flex h-11 items-center justify-center gap-2 border-b border-sand text-[13px] font-medium tracking-[0.04em] text-slate">
          <ShieldTick size={16} color="var(--color-gold)" aria-hidden="true" />
          <span>License {license}</span>
        </div>
        <nav
          aria-label="Main"
          className="flex grow items-center justify-center gap-9 text-base leading-7.5 font-medium"
        >
          {navLinks?.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-steel-900 transition-colors hover:text-gold-dark"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="hidden w-75 shrink-0 items-center justify-center border-l border-sand xl:flex 2xl:w-95">
        <Button
          variant="call"
          href={`tel:${phone?.replace(/[^\d+]/g, "")}`}
          aria-label="Call Orca Roofing"
          icon={<Call size={20} className="text-charcoal" aria-hidden="true" />}
        >
          <span className="hidden flex-col gap-0.5 xl:flex">
            <span className="text-base leading-5 font-bold text-black">Contact Us</span>
            <span className="text-[13px] leading-4 font-medium">{phone}</span>
          </span>
        </Button>
      </div>
      
      <div className="flex grow items-center justify-end gap-2 pr-4 xl:hidden">
        <Button
          variant="call"
          href={`tel:${phone?.replace(/[^\d+]/g, "")}`}
          aria-label="Call Orca Roofing"
          icon={<Call size={20} className="text-charcoal" aria-hidden="true" />}
        />
        <MenuIcon
          size={32}
          role="button"
          tabIndex={0}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setOpen((v) => !v)
          }}
          className="cursor-pointer text-steel-900"
        />
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute top-full right-0 left-0 z-50 flex flex-col border-b border-sand bg-white px-4 py-2 shadow-lg shadow-black/10 xl:hidden"
        >
          {navLinks?.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-steel-900"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
