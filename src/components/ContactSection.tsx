import { useState } from 'react'
import FadeIn from './FadeIn'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const inputStyle = {
    width: '100%',
    background: 'rgba(215,226,234,0.05)',
    border: '1.5px solid rgba(215,226,234,0.15)',
    borderRadius: 16,
    padding: 'clamp(12px, 1.5vw, 18px) clamp(16px, 2vw, 24px)',
    color: '#D7E2EA',
    fontFamily: 'inherit',
    fontWeight: 400,
    fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
    outline: 'none',
    transition: 'border-color 0.2s',
  } as React.CSSProperties

  const focusStyle = { borderColor: 'rgba(215,226,234,0.5)' }

  return (
    <section
      id="contact"
      className="relative"
      style={{ background: '#FFFFFF' }}
    >
      {/* Dark top rounded card */}
      <div
        className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-32"
        style={{ background: '#0C0C0C' }}
      >
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
          <p
            className="text-center font-light uppercase tracking-widest mt-4 mb-16 sm:mb-20 md:mb-24"
            style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
          >
            Let&apos;s build something incredible together
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — info */}
          <FadeIn delay={0.1} y={30}>
            <div className="flex flex-col gap-8">
              <div>
                <p
                  className="font-light uppercase tracking-widest mb-2"
                  style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
                >
                  Email
                </p>
                <a
                  href="mailto:taoufikbounasser211@gmail.com"
                  className="font-medium hover:opacity-70 transition-opacity break-all"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.15rem)', textDecoration: 'none' }}
                >
                  taoufikbounasser211@gmail.com
                </a>
              </div>

              <div>
                <p
                  className="font-light uppercase tracking-widest mb-2"
                  style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
                >
                  Phone
                </p>
                <a
                  href="tel:+37064291236"
                  className="font-medium hover:opacity-70 transition-opacity"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)', textDecoration: 'none' }}
                >
                  +370 642 91236
                </a>
              </div>

              <div>
                <p
                  className="font-light uppercase tracking-widest mb-2"
                  style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
                >
                  Location
                </p>
                <p
                  className="font-medium"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)' }}
                >
                  Radastų g. 17, Lithuania
                </p>
              </div>

              {/* Social links */}
              <div>
                <p
                  className="font-light uppercase tracking-widest mb-3"
                  style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
                >
                  Socials
                </p>
                <div className="flex gap-4">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/taoufik_bounasser/' },
                    { label: 'Facebook',  href: 'https://www.facebook.com/TaoufiQ.021' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium uppercase tracking-wider hover:opacity-70 transition-opacity"
                      style={{
                        color: '#D7E2EA',
                        fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
                        textDecoration: 'none',
                        border: '1.5px solid rgba(215,226,234,0.2)',
                        borderRadius: 999,
                        padding: '6px 16px',
                      }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.2} y={30}>
            <form
              className="flex flex-col gap-4"
              onSubmit={e => {
                e.preventDefault()
                window.location.href = `mailto:taoufikbounasser211@gmail.com?subject=Portfolio inquiry from ${name}&body=${message}%0A%0AFrom: ${email}`
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                style={inputStyle}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = 'rgba(215,226,234,0.15)' }}
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={inputStyle}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = 'rgba(215,226,234,0.15)' }}
              />
              <textarea
                placeholder="Your message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                rows={5}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = 'rgba(215,226,234,0.15)' }}
              />
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                  borderRadius: 9999,
                  border: 'none',
                  cursor: 'pointer',
                  color: 'white',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  padding: 'clamp(12px, 1.5vw, 18px) clamp(32px, 4vw, 48px)',
                  fontSize: 'clamp(0.8rem, 1.1vw, 1rem)',
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.85' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '1' }}
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-5 sm:px-8 md:px-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-3"
        style={{ background: '#FFFFFF' }}
      >
        <p
          className="font-light uppercase tracking-widest"
          style={{ color: '#0C0C0C', opacity: 0.4, fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)' }}
        >
          © 2026 Taoufik Bounasser — All rights reserved
        </p>
        <p
          className="font-light uppercase tracking-widest"
          style={{ color: '#0C0C0C', opacity: 0.4, fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)' }}
        >
          Designer & Creative
        </p>
      </div>
    </section>
  )
}
