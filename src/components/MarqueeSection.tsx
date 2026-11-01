import { useEffect, useRef, useState } from 'react'

const ALL_IMAGES = [
  '/project/westpark/2.png',
  '/project/westpark/3.png',
  '/project/westpark/4.png',
  '/project/westpark/5.png',
  '/project/beauliiving/3.png',
  '/project/beauliiving/4.png',
  '/project/beauliiving/9.png',
  '/project/beauliiving/Group 2 copy.png',
  '/project/bluesky/1.png',
  '/project/bluesky/bluesky.png',
  '/project/bluesky/c3 copy.png',
  '/project/capucines/Group 1.png',
  '/project/capucines/Group 1 copy 2.png',
  '/project/capucines/Group 1 copy 4.png',
  '/project/Kaderia/1.png',
  '/project/Kaderia/2.png',
  '/project/Kaderia/3.png',
  '/project/Kaderia/4.png',
  '/project/Roudani/1.png',
  '/project/Roudani/2.png',
  '/project/Orchidia/11.png',
]

const ROW1_IMAGES = [...ALL_IMAGES.slice(0, 11), ...ALL_IMAGES.slice(0, 11), ...ALL_IMAGES.slice(0, 11)]
const ROW2_IMAGES = [...ALL_IMAGES.slice(11), ...ALL_IMAGES.slice(11), ...ALL_IMAGES.slice(11)]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(newOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 — moves right */}
        <div
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
            display: 'flex',
            gap: '12px',
          }}
        >
          {ROW1_IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              style={{
                width: '320px',
                height: 'auto',
                flexShrink: 0,
                borderRadius: '16px',
                objectFit: 'contain',
              }}
            />
          ))}
        </div>

        {/* Row 2 — moves left */}
        <div
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
            display: 'flex',
            gap: '12px',
          }}
        >
          {ROW2_IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              style={{
                width: '320px',
                height: 'auto',
                flexShrink: 0,
                borderRadius: '16px',
                objectFit: 'contain',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
