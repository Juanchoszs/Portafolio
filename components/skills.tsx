"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Terminal, Wrench, Cpu, Globe } from "lucide-react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"
      ]
    },
    {
      title: "Backend & DB",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      skills: [
        "Node.js", "PostgreSQL", "Neon", "Axios", "REST APIs", "Prisma"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      skills: [
        "Docker", "Kubernetes", "Vercel", "Git", "GitHub", "Postman", "ESLint", "Linux"
      ]
    },
    {
      title: "Security & Auth",
      icon: <Wrench className="w-5 h-5 text-blue-400" />,
      skills: [
        "JWT", "OAuth 2.0", "bcrypt", "Auth.js"
      ]
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-slate-950" ref={ref}>
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-blue-400 tracking-wide uppercase mb-3 flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4" />
            Stack Tecnológico
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Herramientas de Desarrollo</h3>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 p-6 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span 
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-md bg-slate-950/80 text-slate-400 border border-slate-800 hover:text-blue-300 hover:border-blue-500/30 hover:bg-slate-900 transition-all cursor-default"
                      whileHover={{ scale: 1.03, y: -1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
