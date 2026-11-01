import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'

const ABOUT_TEXT =
  "With more than five years of experience in design, i specialize in visual identity, real estate creatives, web design, and video editing. i love helping brands stand out with work that feels sharp, intentional, and memorable. Let's build something incredible together!"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 py-24"
      style={{ background: '#0C0C0C', overflow: 'hidden' }}
    >
      {/* Corner decorations — hidden on mobile to avoid overlap */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="hidden sm:block absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="" className="w-full h-auto" draggable={false}
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="hidden sm:block absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="" className="w-full h-auto" draggable={false}
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="hidden sm:block absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="" className="w-full h-auto" draggable={false}
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="hidden sm:block absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="" className="w-full h-auto" draggable={false}
        />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 w-full max-w-2xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-24 w-full">
          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium leading-relaxed w-full"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(0.95rem, 2vw, 1.35rem)',
            }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
