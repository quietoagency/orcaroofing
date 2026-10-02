'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'iconsax-reactjs'
import { formatPhone } from '@/lib/formatPhone'
import FormField, { labelTextClass } from './FormField'
import RequiredMark from './RequiredMark'
import TurnstileWidget from './TurnstileWidget'

const MESSAGE_MAX = 150

const inputClass =
  'h-13 w-full rounded-xl border border-sand bg-[#f6f2ec] px-4.5 text-[15px] text-[#222] outline-none focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40'
const linkClass = 'font-semibold text-gold-dark underline underline-offset-2'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type FormState = {
  returning: boolean | null
  phone: string
  message: string
  token: string | null
  status: Status
  error: string
}

const initialState: FormState = {
  returning: null,
  phone: '',
  message: '',
  token: null,
  status: 'idle',
  error: '',
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initialState)
  const { returning, phone, message, token, status, error } = state
  const update = (patch: Partial<FormState>) => setState((prev) => ({ ...prev, ...patch }))

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (returning === null) {
      update({ status: 'error', error: 'Please tell us if you are a returning customer.' })
      return
    }
    if (!token) {
      update({ status: 'error', error: 'Please complete the captcha.' })
      return
    }
    update({ status: 'submitting', error: '' })
    // TODO: send the form data and the Turnstile token to the backend endpoint.
    update({ status: 'success' })
  }

  if (status === 'success') {
    return (
      <div
        aria-live="polite"
        className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] xl:p-11"
      >
        <span className="h-1 w-16 bg-gold" />
        <h2 className="text-[28px] leading-9 font-semibold text-black">Thank you!</h2>
        <p className="text-[15px] leading-6 text-slate">
          We received your request and our team will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      aria-label="Contact form"
      onSubmit={onSubmit}
      className="flex flex-col gap-5.5 rounded-3xl bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] xl:w-150 xl:shrink-0 xl:p-11 xl:pb-10"
    >
      <div className="flex flex-col gap-2 pb-1">
        <h2 className="text-[28px] leading-9 font-semibold text-black">Tell us about your project</h2>
        <p className="text-[15px] leading-6 text-slate">Fill out the form and our team will get back to you shortly.</p>
      </div>

      <FormField id="fullname" label="Full Name" required>
        <input id="fullname" name="fullName" type="text" autoComplete="name" required className={inputClass} />
      </FormField>

      <div className="flex flex-col gap-5.5 sm:flex-row sm:gap-4">
        <FormField id="email" label="Email">
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
        </FormField>
        <FormField id="phone" label="Phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(999) 999-9999"
            required
            pattern="\(\d{3}\) \d{3}-\d{4}"
            title="Phone number in the format (999) 999-9999"
            value={phone}
            onChange={(e) => update({ phone: formatPhone(e.target.value) })}
            className={inputClass}
          />
        </FormField>
      </div>

      <FormField id="address" label="Home Address" required>
        <input id="address" name="address" type="text" autoComplete="street-address" required className={inputClass} />
      </FormField>

      <fieldset className="flex flex-col gap-2.5">
        <legend className={`${labelTextClass} pb-2.5`}>Are you a returning customer?</legend>
        <div className="flex flex-wrap gap-2.5">
          {[
            { value: true, label: 'Yes, I am a returning customer' },
            { value: false, label: "No, I'm a new customer" },
          ].map(({ value, label }) => {
            const active = returning === value
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => update({ returning: value })}
                className={`h-11 rounded-full border px-5 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:outline-none ${
                  active ? 'border-charcoal bg-charcoal text-white' : 'border-sand bg-white text-black hover:bg-linen'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </fieldset>

      <FormField id="message" label="How can we help you?" required>
        <textarea
          id="message"
          name="message"
          required
          maxLength={MESSAGE_MAX}
          value={message}
          onChange={(e) => update({ message: e.target.value })}
          className={`${inputClass} h-28 resize-none py-3.5`}
        />
        <span className="self-end text-xs text-slate">
          {message.length} of {MESSAGE_MAX} max characters
        </span>
      </FormField>

      <div className="flex flex-col gap-4 border-t border-sand pt-4.5">
        <label htmlFor="consent-transactional" className="flex items-start gap-3.5">
          <input
            id="consent-transactional"
            name="consentTransactional"
            type="checkbox"
            required
            className="mt-0.5 size-5 shrink-0 accent-gold"
          />
          <span className="text-[13px] leading-5.25 text-slate">
            By checking this box, I consent to receive transactional messages related to my account, orders, or
            services I have requested. These messages may include appointment reminders, order confirmations, and
            account notifications among others. Message frequency may vary. Message &amp; Data rates may apply. Reply
            HELP for help or STOP to opt-out. Please read our{' '}
            <a href="#" className={linkClass}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className={linkClass}>
              our Privacy Policy
            </a>
            .<RequiredMark />
          </span>
        </label>
        <label htmlFor="consent-marketing" className="flex items-start gap-3.5">
          <input
            id="consent-marketing"
            name="consentMarketing"
            type="checkbox"
            required
            className="mt-0.5 size-5 shrink-0 accent-gold"
          />
          <span className="text-[13px] leading-5.25 text-slate">
            I agree to receive promotional and marketing SMS text messages from Orca Roofing &amp; Exterior, such as
            offers and reminders. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out,
            HELP for help. Consent is not a condition of purchase.
            <RequiredMark />
          </span>
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <TurnstileWidget onToken={(value) => update({ token: value })} />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex h-15 items-center justify-center gap-3.5 self-start rounded-full bg-gold py-0 pr-2 pl-8 text-[17px] font-semibold text-black focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-60 sm:self-auto"
        >
          Submit
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-charcoal">
            <ArrowRight size={20} color="#ffffff" aria-hidden="true" />
          </span>
        </button>
      </div>

      <p aria-live="polite" className="text-sm text-[#b3261e]">
        {status === 'error' ? error : ''}
      </p>
    </form>
  )
}
