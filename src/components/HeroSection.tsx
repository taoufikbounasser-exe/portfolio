import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'

const NAV_LINKS = ['About', 'Services', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section
      className="sm:h-screen flex flex-col relative"
      style={{ overflowX: 'clip', background: '#0C0C0C', minHeight: '100svh' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex justify-between items-center px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[0.65rem] sm:text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA', textDecoration: 'none' }}
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden w-full px-2">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[18vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] mt-4 sm:mt-4 md:-mt-5 whitespace-normal sm:whitespace-nowrap text-center"
          style={{ display: 'block' }}
        >
          Hi, i&apos;m taoufik
        </h1>
      </FadeIn>

      {/* ── MOBILE layout: portrait centered, text+button below ── */}
      <div className="flex sm:hidden flex-col items-center flex-1 justify-between pb-8 px-5">
        {/* Portrait — big and centered */}
        <FadeIn delay={0.4} y={30} className="w-full flex justify-center mt-6">
          <Magnet padding={80} strength={4}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out">
            <img
              src="/portrait.png"
              alt="Taoufik — Designer"
              draggable={false}
              style={{ width: 'min(88vw, 380px)', height: 'auto', display: 'block' }}
            />
          </Magnet>
        </FadeIn>

        {/* Text + button below portrait */}
        <FadeIn delay={0.6} y={20} className="flex flex-col items-center gap-5 text-center">
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[260px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.7rem, 3.5vw, 1rem)' }}
          >
            a designer crafting striking visuals, brands & digital experiences
          </p>
          <ContactButton />
        </FadeIn>
      </div>

      {/* ── DESKTOP layout: portrait absolutely centered, bottom bar ── */}
      <div className="hidden sm:block">
        {/* Portrait */}
        <div
          className="absolute z-10"
          style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 'clamp(360px, 55vw, 780px)' }}
        >
          <FadeIn delay={0.6} y={30}>
            <Magnet padding={150} strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out">
              <img
                src="/portrait.png"
                alt="Taoufik — Designer"
                draggable={false}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Magnet>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end pb-8 md:pb-10 px-8 md:px-10 z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="font-light uppercase tracking-wide leading-snug max-w-[200px] md:max-w-[260px]"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              a designer crafting striking visuals, brands & digital experiences
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      
    </section>
  )
}
