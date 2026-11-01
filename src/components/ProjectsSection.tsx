import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'

interface Project {
  num: string
  category: string
  name: string
  images: string[]
  feedImages?: string[]
}

const PROJECTS: Project[] = [
  { num: '01', category: 'Client', name: 'West Park',
    images: ['/project/westpark/2.png', '/project/westpark/3.png'] },
  { num: '02', category: 'Client', name: 'Beauliiving',
    images: ['/project/beauliiving/3.png', '/project/beauliiving/4.png'] },
  { num: '03', category: 'Client', name: 'Bluesky',
    images: ['/project/bluesky/c3 copy.png', '/project/bluesky/c3 copy 2.png'] },
  { num: '04', category: 'Client', name: 'Capucines',
    images: ['/project/capucines/Group 1.png', '/project/capucines/Group 1 copy 2.png'] },
  { num: '05', category: 'Client', name: 'Eden Garden',
    images: ['/project/eden garden/eden gardin.png', '/project/eden garden/3.png'] },
  { num: '06', category: 'Client', name: 'Illino',
    images: ['/project/Illino/c3 copy 5.png', '/project/Illino/c3 copy 6.png'] },
  { num: '07', category: 'Client', name: 'Jawharatbenslimane',
    images: ['/project/Jawharatbenslimane/Group 1.png', '/project/Jawharatbenslimane/3.png'] },
  { num: '08', category: 'Client', name: 'Kaderia',
    images: ['/project/Kaderia/1.png', '/project/Kaderia/2.png'] },
  { num: '09', category: 'Client', name: 'Lahlou',
    images: ['/project/lahlou/1.png', '/project/lahlou/2.png'] },
  { num: '10', category: 'Client', name: 'Roudani',
    images: ['/project/Roudani/1.png', '/project/Roudani/2.png'] },
  { num: '11', category: 'Client', name: 'Roches Noir',
    images: ['/project/Roches noir/1.png', '/project/Roches noir/2.png'] },
  { num: '12', category: 'Client', name: 'Orchidia',
    images: ['/project/Orchidia/11.png', '/project/Orchidia/12.png'] },
  { num: '13', category: 'Client', name: 'Alwifaq',
    images: ['/project/Alwifaq/i3lan lmihrajan.png', '/project/Alwifaq/إعلان الطفل.png'] },
]

const TOTAL_CARDS = PROJECTS.length

function InstagramFeedGrid({ images }: { images: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3 px-1">
        <div style={{ width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', padding: 2 }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0C0C0C',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#D7E2EA', fontSize: 13, fontWeight: 700 }}>B</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem,1.2vw,1rem)', fontWeight: 600 }}>bluesky.darbouazza</span>
          <span style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.6rem,0.9vw,0.8rem)' }}>Instagram Feed Design</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3, borderRadius: 16, overflow: 'hidden' }}>
        {images.map((src, i) => (
          <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
            <img src={src} alt={`Feed ${i+1}`} loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ))}
        {Array.from({ length: Math.max(0, 6 - images.length) }).map((_, i) => (
          <div key={`e${i}`} style={{ aspectRatio: '1/1', background: 'rgba(215,226,234,0.05)' }} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index, totalCards }: { project: Project; index: number; totalCards: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const targetScale = 1 - (totalCards - 1 - index) * 0.025
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  const r = 'clamp(12px, 2vw, 32px)'

  return (
    <div ref={containerRef} className="flex items-start justify-center"
      style={{ paddingTop: `${index * 20}px`, height: '110vh', overflow: 'visible' }}>
      <motion.div
        className="sticky w-full border-2 border-[#D7E2EA] p-3 sm:p-6 md:p-8"
        style={{ top: '3.5rem', borderRadius: 'clamp(20px,4vw,50px)',
          background: '#0C0C0C', scale, transformOrigin: 'top center' }}
      >
        <FadeIn delay={0.05} y={50} duration={0.6}>
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-5 min-w-0">
            <span className="font-black leading-none shrink-0"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1.8rem, 6vw, 80px)', lineHeight: 1 }}>
              {project.num}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-light uppercase tracking-widest"
                style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.55rem,1vw,0.9rem)' }}>
                {project.category}
              </span>
              <span className="font-black uppercase tracking-tight truncate"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 2.5vw, 2.2rem)', lineHeight: 1.1 }}>
                {project.name}
              </span>
            </div>
          </div>
        </div>

        {/* Images */}
        {project.feedImages ? (
          <InstagramFeedGrid images={project.feedImages} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'clamp(4px,1vw,14px)' }}>
            {project.images.map((src, i) => (
              <img key={i} src={src} alt={`${project.name} ${i+1}`} loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: r }} />
            ))}
          </div>
        )}
        </FadeIn>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-3 sm:px-6 md:px-8 pt-16 sm:pt-24 md:pt-32 pb-40"
      style={{ background: '#0C0C0C' }}>
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(2.8rem, 12vw, 160px)' }}>
          Projects
        </h2>
      </FadeIn>
      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} totalCards={TOTAL_CARDS} />
        ))}
      </div>
    </section>
  )
}
