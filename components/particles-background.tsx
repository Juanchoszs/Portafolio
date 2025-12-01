"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  symbol: string
  duration: number
  delay: number
}

export function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const symbols = ["{}", "</>", "()"]
    const newParticles: Particle[] = []

    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        duration: 20 + Math.random() * 30,
        delay: Math.random() * 10,
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.08]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-blue-400/30 font-mono text-xs select-none"
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
          }}
          animate={{
            y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
            opacity: [0, 0.2, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  )
}
