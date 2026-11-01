import FadeIn from './FadeIn'

const IDS = [
  { name: 'Metal',   img: '/id-metal.png' },
  { name: 'Premova', img: '/id-premova.png' },
  { name: 'Alimad',  img: '/id-alimad.png' },
]

export default function IdSection() {
  return (
    <section
      className="py-24 sm:py-32 md:py-40 px-5 sm:px-6 md:px-8 relative"
      style={{ background: '#0C0C0C' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          ID Design
        </h2>
        <p
          className="text-center font-light uppercase tracking-widest mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
        >
          Business cards & identity design crafted for brands
        </p>
      </FadeIn>

      {/* ID cards — side by side, full visible */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
        {IDS.map((id, i) => (
          <FadeIn key={id.name} delay={i * 0.15} y={40}>
            <div
              style={{
                borderRadius: 'clamp(16px, 2.5vw, 36px)',
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
                src={id.img}
                alt={`${id.name} ID card`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <p
              className="text-center font-medium uppercase tracking-widest mt-4"
              style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
            >
              {id.name}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
