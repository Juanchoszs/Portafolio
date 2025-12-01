"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Phone, Github, Download, Terminal, Code2 } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer"
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

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

        {/* Abstract Code Visual */}
        <motion.div
          className="hidden lg:block relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto flex items-center gap-2 text-xs text-slate-500">
                <Terminal className="w-3 h-3" />
                developer.tsx
              </div>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex gap-2">
                <span className="text-pink-400">const</span>
                <span className="text-blue-400">developer</span>
                <span className="text-slate-400">=</span>
                <span className="text-yellow-400">{"{"}</span>
              </div>
              <div className="pl-4 flex gap-2">
                <span className="text-slate-300">name:</span>
                <span className="text-green-400">"Juan Rincon"</span>,
              </div>
              <div className="pl-4 flex gap-2">
                <span className="text-slate-300">role:</span>
                <span className="text-green-400">"Full Stack Dev"</span>,
              </div>
              <div className="pl-4 flex gap-2">
                <span className="text-slate-300">skills:</span>
                <span className="text-purple-400">["React", "Next.js", "Node"]</span>,
              </div>
              <div className="pl-4 flex gap-2">
                <span className="text-slate-300">hardWorker:</span>
                <span className="text-orange-400">true</span>,
              </div>
              <div className="flex gap-2">
                <span className="text-yellow-400">{"}"}</span>
              </div>
              <div className="pt-4 flex gap-2">
                <span className="text-pink-400">export</span>
                <span className="text-pink-400">default</span>
                <span className="text-blue-400">developer</span>
              </div>
            </div>
            
            <motion.div 
              className="absolute -right-6 -bottom-6 p-4 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Code2 className="w-8 h-8 text-white" />
            </motion.div>
          </div>
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
