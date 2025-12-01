"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje')
      }

      setIsSuccess(true)
      setFormState({ name: "", email: "", message: "" })
      toast.success("Mensaje enviado correctamente")
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.")
      toast.error("Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#3b82f6" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="#3b82f6" strokeWidth="0.3" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#3b82f6" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating envelope icons */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-blue-400/[0.03]"
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mail className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-blue-400/[0.03]"
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Send className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-medium text-blue-400 tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-blue-400"></span>
              Contacto
            </h2>
            <h3 className="text-4xl font-bold mb-6 text-white">¿Trabajamos juntos?</h3>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Estoy disponible para nuevos proyectos y oportunidades. 
              Si tienes una idea en mente o necesitas ayuda con tu próximo gran proyecto, hablemos.
            </p>

            <div className="grid gap-6">
              <a
                href="mailto:juanchopolas04090@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">Email</h4>
                  <p className="text-sm text-slate-400">juanchopolas04090@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:3025982458"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">Teléfono</h4>
                  <p className="text-sm text-slate-400">302 598 2458</p>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/juan-sebastian-rincon-linares-4794b9301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 text-slate-400 transition-all"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/Juanchoszs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 text-slate-400 transition-all"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-slate-900/90 backdrop-blur-md z-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-slate-400">Gracias por contactarme. Te responderé lo antes posible.</p>
                  <Button 
                    variant="outline" 
                    className="mt-8 border-slate-700 text-slate-300 hover:bg-slate-800"
                    onClick={() => setIsSuccess(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {error}
                    </div>
                  )}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-600"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-600"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Mensaje</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-600 resize-none"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
