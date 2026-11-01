import FadeIn from './FadeIn'

const SERVICES = [
  {
    num: '01',
    name: 'Visual Identity & Branding',
    desc: 'Creating cohesive brand identities — logos, color systems, typography, and guidelines — that give businesses a clear and memorable presence.',
  },
  {
    num: '02',
    name: 'Real Estate Creatives',
    desc: 'Eye-catching ads, brochures, and social media visuals tailored for real estate projects that attract buyers and build trust.',
  },
  {
    num: '03',
    name: 'Instagram Feed Design',
    desc: 'Designing unified, scroll-stopping Instagram feeds where every post connects to form a cohesive visual grid that reflects the brand.',
  },
  {
    num: '04',
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with sharp attention to layout, typography, and user experience.',
  },
  {
    num: '05',
    name: 'Video Editing',
    desc: 'Professional video editing and motion graphics that bring brands and stories to life across social media and beyond.',
  },
  {
    num: '06',
    name: 'Social Media Design',
    desc: 'Scroll-stopping posts, stories, and campaign visuals designed to build brand consistency and engagement across all platforms.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <h2
        className="font-black uppercase text-center mb-12 sm:mb-20 md:mb-28"
        style={{
          color: '#0C0C0C',
          fontSize: 'clamp(2.8rem, 12vw, 160px)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30}>
            <div
              className="py-6 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Mobile: stacked, Desktop: side by side */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 md:gap-10">
                {/* Number */}
                <span
                  className="font-black leading-none shrink-0"
                  style={{
                    color: '#0C0C0C',
                    fontSize: 'clamp(2rem, 8vw, 140px)',
                    lineHeight: 0.9,
                  }}
                >
                  {service.num}
                </span>

                {/* Name + desc */}
                <div className="flex flex-col gap-1 sm:gap-2 sm:pt-1">
                  <h3
                    className="font-medium uppercase"
                    style={{
                      color: '#0C0C0C',
                      fontSize: 'clamp(0.95rem, 2.2vw, 2.1rem)',
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed"
                    style={{
                      color: '#0C0C0C',
                      opacity: 0.6,
                      fontSize: 'clamp(0.8rem, 1.6vw, 1.25rem)',
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
