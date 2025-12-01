"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-slate-950 relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-medium text-blue-400 tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-blue-400"></span>
              Sobre mí
            </h2>
            <h3 className="text-4xl font-bold mb-6 text-balance text-white leading-tight">
              Desarrollador Web con pasión por crear <span className="text-blue-400">soluciones innovadoras</span>
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Soy un desarrollador web con experiencia en la creación de aplicaciones y sistemas de gestión. Mi
              fortaleza radica en mi versatilidad y capacidad de adaptación a diferentes tecnologías y desafíos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-slate-300 leading-relaxed"
          >
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
              <p>
                He trabajado en proyectos que van desde sistemas de gestión de préstamos hasta integraciones con
                plataformas de facturación, siempre enfocándome en crear soluciones funcionales y centradas en el usuario.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
              <p>
                Mi experiencia incluye el desarrollo de sistemas de gestión financiera, tablas de amortización, manejo de
                pagos, y generación de documentos, todo construido con tecnologías web modernas.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl font-bold text-white mb-2">1.5+</div>
            <div className="text-sm text-blue-400 font-medium uppercase tracking-wider">Años de experiencia</div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl font-bold text-white mb-2">3+</div>
            <div className="text-sm text-blue-400 font-medium uppercase tracking-wider">Proyectos completados</div>
          </div>
          
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-blue-400 font-medium uppercase tracking-wider">Compromiso</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
