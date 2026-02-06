"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Github, Download } from "lucide-react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ParticlesBackground } from "./particles-background"
import Image from "next/image"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer"
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  // 3D Card Effect Logic
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const xPct = clientX - left - width / 2
    const yPct = clientY - top - height / 2

    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(mouseY, [-200, 200], [15, -15])
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15])
  const translateZ = useTransform(mouseY, [-200, 200], [10, -10])


  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 2
      const fullTxt = i === 0 ? "Full Stack Developer" : "Software Engineer"

      setText(isDeleting ? fullTxt.substring(0, text.length - 1) : fullTxt.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-slate-950">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]" />

        <ParticlesBackground />

        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Disponible para trabajar
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Juan Sebastian
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Rincon Linares
              </span>
            </h1>

            <div className="h-8 md:h-10 flex items-center">
              <span className="text-xl md:text-2xl text-slate-400 font-mono">
                &gt; {text}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Desarrollador apasionado por crear experiencias web modernas, escalables y visualmente impactantes.
              Especializado en el ecosistema React y TypeScript.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                asChild
              >
                <a href="mailto:juanchopolas04090@gmail.com">
                  Contactar ahora
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                asChild
              >
                <a href="/cv.pdf" download>
                  <Download className="h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Github, href: "https://github.com/Juanchoszs" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/juan-sebastian-rincon-linares-4794b9301/" },
              { icon: Mail, href: "mailto:juanchopolas04090@gmail.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <item.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* 3D Profile Card Feature */}
        <motion.div
          className="hidden lg:flex items-center justify-center [perspective:1000px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="relative w-80 h-[28rem] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl cursor-pointer [transform-style:preserve-3d] group"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Holographic Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ transform: "translateZ(1px)" }} />

            {/* Profile Image */}
            <div className="absolute inset-4 rounded-xl overflow-hidden border border-slate-700/50 shadow-inner bg-slate-900" style={{ transform: "translateZ(20px)" }}>
              <div className="absolute inset-0 bg-blue-500/10 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300" />
              <Image
                src="/Perfil.jpeg"
                alt="Juan Rincon"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-8 right-8 px-4 py-2 bg-blue-600/90 backdrop-blur-md text-white text-sm font-bold rounded-lg shadow-lg border border-blue-400/20"
              style={{ transform: "translateZ(50px)" }}
            >
              DevOps & FullStack
            </motion.div>

            {/* Tech Stack Floating Icons (Small Detail) */}
            <motion.div
              className="absolute -top-6 -right-6 p-3 bg-slate-900 rounded-xl border border-slate-800 shadow-xl"
              style={{ transform: "translateZ(30px)" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 flex items-center justify-center text-blue-400 text-xs font-mono">
                &lt;/&gt;
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-blue-500 to-transparent mx-auto" />
      </motion.div>
    </section>
  )
}
