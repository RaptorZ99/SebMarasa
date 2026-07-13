import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 36, mass: 0.4 })
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[93] h-[2px] origin-left bg-signal"
      style={{ scaleX }}
    />
  )
}
