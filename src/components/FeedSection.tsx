import { useRef, useEffect } from 'react'
import FadeIn from './FadeIn'

const FEEDS = [
  { name: 'Bluesky',      img: '/feed-bluesky.png' },
  { name: 'Eden Garden',  img: '/feed-eden.png' },
  { name: 'West Park',    img: '/feed-west.png' },
  { name: 'Benslimane',   img: '/feed-benslime.png' },
  // duplicate for seamless loop
  { name: 'Bluesky',      img: '/feed-bluesky.png' },
  { name: 'Eden Garden',  img: '/feed-eden.png' },
  { name: 'West Park',    img: '/feed-west.png' },
  { name: 'Benslimane',   img: '/feed-benslime.png' },
]

export default function FeedSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const posRef = useRef<number>(0)
  const pausedRef = useRef<boolean>(false)
  const speed = 0.6 // px per frame

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const step = () => {
      if (!pausedRef.current && el) {
        posRef.current += speed
        // reset when we've scrolled half the total width (one set of 4)
        const half = el.scrollWidth / 2
        if (posRef.current >= half) posRef.current = 0
        el.style.transform = `translateX(-${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(step)
    }

    animRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <section
      className="py-16 sm:py-24 md:py-32 relative"
      style={{ background: '#0C0C0C', overflow: 'hidden', zIndex: 20 }}
    >
      {/* Title */}
      <FadeIn delay={0} y={40}>
        <div className="px-5 sm:px-8 md:px-10 text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
          >
            Feed Design
          </h2>
          <p
            className="font-light uppercase tracking-widest"
            style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
          >
            Cohesive Instagram feeds crafted for real estate brands
          </p>
        </div>
      </FadeIn>

      {/* Auto-scrolling row */}
      <div
        style={{ overflow: 'hidden', paddingBottom: 12 }}
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 'clamp(16px, 2vw, 28px)',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {FEEDS.map((feed, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 'clamp(220px, 25vw, 340px)',
              }}
            >
              <div
                style={{
                  borderRadius: 'clamp(16px, 2.5vw, 32px)',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(215,226,234,0.12)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-8px)'
                  el.style.borderColor = 'rgba(215,226,234,0.4)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(0)'
                  el.style.borderColor = 'rgba(215,226,234,0.12)'
                }}
              >
                <img
                  src={feed.img}
                  alt={`${feed.name} Instagram feed`}
                  draggable={false}
                  style={{ width: '100%', height: 'auto', display: 'block', userSelect: 'none' }}
                />
              </div>
              <p
                className="text-center font-medium uppercase tracking-widest mt-4"
                style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
              >
                {feed.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
