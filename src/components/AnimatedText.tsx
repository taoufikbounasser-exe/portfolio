import { useRef, CSSProperties } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

function AnimatedChar({
  char,
  progress,
  index,
  total,
}: {
  char: string
  progress: MotionValue<number>
  index: number
  total: number
}) {
  const opacity = useTransform(
    progress,
    [index / total, Math.min((index + 1) / total + 0.05, 1)],
    [0.15, 1]
  )

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          opacity,
          whiteSpace: 'pre',
        }}
      >
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  // Split into words, animate each character but wrap words as a unit
  const words = text.split(' ')
  let charIndex = 0
  const total = text.replace(/ /g, '').length

  return (
    <p ref={ref} className={className} style={{ ...style, wordBreak: 'normal', overflowWrap: 'normal' }}>
      {words.map((word, wi) => {
        const wordChars = word.split('')
        const wordStartIndex = charIndex
        charIndex += word.length

        return (
          <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {wordChars.map((char, ci) => (
              <AnimatedChar
                key={ci}
                char={char}
                progress={scrollYProgress}
                index={wordStartIndex + ci}
                total={total}
              />
            ))}
            {/* space between words */}
            {wi < words.length - 1 && (
              <span style={{ display: 'inline-block', width: '0.3em' }}> </span>
            )}
          </span>
        )
      })}
    </p>
  )
}
