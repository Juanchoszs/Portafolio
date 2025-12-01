"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [cromuImageIndex, setCromuImageIndex] = useState(0)
  const [remesasImageIndex, setRemesasImageIndex] = useState(0)
  const [trazabilidadImageIndex, setTrazabilidadImageIndex] = useState(0)
  const [quantumImageIndex, setQuantumImageIndex] = useState(0)

  const cromuImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ss9Yc7Z9IPhIp9nVprQzDnfc1cy01v.png",
      alt: "CROMU - Información de contacto",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JMIAbqZviMkeGIwGu7iKG6fSvKPXtY.png",
      alt: "CROMU - Banca Digital Segura",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3AiHwVTNorSFJ8cLHwxSwgSCpWvCGV.png",
      alt: "CROMU - Seguridad financiera",
    },
  ]

  const remesasImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ae5LDoeE2GRwec4A1nvchGdrhPGKRM.png",
      alt: "Remesas - Nuestro Sentimiento",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2dx3SGhk0hMdQ9mGafgTFWf6sSppWm.png",
      alt: "Remesas - Servicios",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xs2JEmCkbLfsV7yq5zvw5rxw3pSk47.png",
      alt: "Remesas - Métodos",
    },
  ]

  const trazabilidadImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MV2xUYDKt6kfI7mxO05uCvloCDv1ob.png",
      alt: "Trazabilidad - Edición de Envíos",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XZfhsnyFXyf7jWWAdp1M9bQHyTp5dh.png",
      alt: "Trazabilidad - Analítica de Efectividad",
    },
  ]

  const quantumImages = [
    {
      src: "/images/SP_1.jpeg",
      alt: "Quantum Financial Dashboard - Proyección S&P 500 (Vista 1)",
    },
    {
      src: "/images/SP_2.jpeg",
      alt: "Quantum Financial Dashboard - Proyección S&P 500 (Vista 2)",
    },
    {
      src: "/images/BTC.jpeg",
      alt: "Quantum Financial Dashboard - Proyección Bitcoin",
    },
  ]

  const nextCromuImage = () => {
    setCromuImageIndex((prev) => (prev + 1) % cromuImages.length)
  }

  const prevCromuImage = () => {
    setCromuImageIndex((prev) => (prev - 1 + cromuImages.length) % cromuImages.length)
  }

  const nextRemesasImage = () => {
    setRemesasImageIndex((prev) => (prev + 1) % remesasImages.length)
  }

  const prevRemesasImage = () => {
    setRemesasImageIndex((prev) => (prev - 1 + remesasImages.length) % remesasImages.length)
  }

  const nextTrazabilidadImage = () => {
    setTrazabilidadImageIndex((prev) => (prev + 1) % trazabilidadImages.length)
  }

  const prevTrazabilidadImage = () => {
    setTrazabilidadImageIndex((prev) => (prev - 1 + trazabilidadImages.length) % trazabilidadImages.length)
  }

  const nextQuantumImage = () => {
    setQuantumImageIndex((prev) => (prev + 1) % quantumImages.length)
  }

  const prevQuantumImage = () => {
    setQuantumImageIndex((prev) => (prev - 1 + quantumImages.length) % quantumImages.length)
  }

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-slate-950" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-blue-400 tracking-wide uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-blue-400"></span>
            Proyectos
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Experiencia Profesional</h3>
        </motion.div>

        <div className="space-y-32">
          {/* CROMU */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-3xl font-bold text-white">CROMU</h4>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-medium border border-blue-500/20">
                    1 año
                  </span>
                </div>
                <p className="text-lg text-blue-200/80 mb-4">Fondo de ahorros y préstamos</p>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Sistema bancario completo que incluye gestión de cuentas para clientes y administradores, tablas de
                amortización, generación de vouchers, manejo de pagos y estados, y CRUD avanzado. Desarrollado con React
                y TypeScript, con integración a PostgreSQL y autenticación JWT.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "PostgreSQL", "JWT", "bcrypt"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                asChild
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-none border-l-4 border-blue-400"
              >
                <a href="https://cromu.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Ver proyecto
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="relative space-y-4 group">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group-hover:border-blue-500/30 transition-colors duration-500">
                <img
                  src={cromuImages[cromuImageIndex].src || "/placeholder.svg"}
                  alt={cromuImages[cromuImageIndex].alt}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Navigation Overlay */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevCromuImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextCromuImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                {cromuImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCromuImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === cromuImageIndex ? "w-8 bg-blue-500" : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Siigo Integration */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="order-2 md:order-1 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-xl hover:border-blue-500/30 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JS9vG5Pg7g0uVGnYLd6VlxQ3KZ0gvz.png"
                    alt="Siigo - Crear Nueva Factura"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-xl hover:border-blue-500/30 transition-colors duration-300">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rYxkHiJChshsWVYu3vhVjQnZOZh6KF.png"
                      alt="Siigo - Consultar Facturas"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-xl hover:border-blue-500/30 transition-colors duration-300">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vtp1xqWpZRPGSRTBnVGwuIsTrCf7m5.png"
                      alt="Siigo - Panel de Administración"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-3xl font-bold text-white">Integración Siigo</h4>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-medium border border-blue-500/20">
                    6 meses
                  </span>
                </div>
                <p className="text-lg text-blue-200/80 mb-4">Sistema de facturación con analítica avanzada</p>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Plataforma privada de facturación con integración a Siigo. Incluye creación y gestión de facturas,
                consulta de documentos, panel de administración, y análisis avanzado de datos mediante carga de archivos
                Excel. Sistema robusto con múltiples capas de seguridad.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Siigo API", "OAuth 2.0", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ImageIcon className="h-4 w-4" />
                <span>Proyecto privado - Solo capturas disponibles</span>
              </div>
            </div>
          </motion.div>

          {/* FUEC Generator */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-3xl font-bold text-white mb-4">Generador de Documentos FUEC</h4>
                <p className="text-lg text-blue-200/80 mb-4">Sistema de gestión de contratos de transporte</p>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Aplicación para la generación automática de documentos FUEC (Formato Único de Extracto del Contrato).
                Incluye gestión de información de contratos, vigencias, características de vehículos, conductores y
                responsables. Sistema privado con validación de datos y generación de documentos oficiales.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "PDF Generation", "Form Validation"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ImageIcon className="h-4 w-4" />
                <span>Proyecto privado - Solo capturas disponibles</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-xl hover:border-blue-500/30 transition-colors duration-300">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xXOAzEv42o31085mK2tz7fTVRyOH2X.png"
                  alt="FUEC - Información del Contrato"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-xl hover:border-blue-500/30 transition-colors duration-300">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SAhR3l3kY7J8n0BRweH3ulbDcR3f2Z.png"
                  alt="FUEC - Características del Vehículo"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </motion.div>

          {/* Remesas */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative space-y-4 group">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group-hover:border-blue-500/30 transition-colors duration-500">
                <img
                  src={remesasImages[remesasImageIndex].src || "/placeholder.svg"}
                  alt={remesasImages[remesasImageIndex].alt}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevRemesasImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextRemesasImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                {remesasImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setRemesasImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === remesasImageIndex ? "w-8 bg-blue-500" : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-3xl font-bold text-white">Remesas y Mensajes</h4>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                    Informativo
                  </span>
                </div>
                <p className="text-lg text-blue-200/80 mb-4">Plataforma de envíos y mensajería</p>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Sitio web informativo para empresa de envíos y mensajería. Presenta servicios de transporte,
                almacenamiento y distribución con diseño elegante. Incluye información sobre métodos de envío,
                cantidades manejadas, puntos de llegada, y detalles sobre servicios corporativos. Implementado con
                glasmorfismo y diseño minimalista en blanco y negro.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind CSS", "Glassmorphism"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button asChild className="gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                <a href="https://remesasymensajes.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Ver proyecto
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Trazabilidad */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-3xl font-bold text-white">Trazabilidad Remesas</h4>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                    Dashboard
                  </span>
                </div>
                <p className="text-lg text-blue-200/80 mb-4">Sistema de gestión logística multi-empresa</p>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Dashboard administrativo para el seguimiento y control de envíos y devoluciones para empresas como Natura,
                Leoniza, Auteco y Yanbal. Incluye analítica avanzada con indicadores de éxito, devoluciones y pérdidas,
                además de gráficos de efectividad mensual. Diseño minimalista en blanco y negro enfocado en la
                productividad y visualización clara de datos.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Chart.js", "Dashboard"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ImageIcon className="h-4 w-4" />
                <span>Proyecto privado - Solo capturas disponibles</span>
              </div>
            </div>

            <div className="relative space-y-4 group">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-white shadow-2xl group-hover:border-blue-500/30 transition-colors duration-500">
                <img
                  src={trazabilidadImages[trazabilidadImageIndex].src || "/placeholder.svg"}
                  alt={trazabilidadImages[trazabilidadImageIndex].alt}
                  className="w-full h-full object-contain"
                />
                
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevTrazabilidadImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTrazabilidadImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                {trazabilidadImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTrazabilidadImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === trazabilidadImageIndex ? "w-8 bg-blue-500" : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quantum */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative space-y-4 group">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group-hover:border-blue-500/30 transition-colors duration-500">
                <img
                  src={quantumImages[quantumImageIndex].src || "/placeholder.svg"}
                  alt={quantumImages[quantumImageIndex].alt}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevQuantumImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextQuantumImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                {quantumImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuantumImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === quantumImageIndex ? "w-8 bg-blue-500" : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-3xl font-bold text-white">Quantum Financial Dashboard</h4>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-medium border border-blue-500/20">
                    Proyecto personal
                  </span>
                </div>
                <p className="text-lg text-blue-200/80 mb-4">Proyección Monte Carlo con ARIMA + GARCH</p>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Dashboard cuantitativo avanzado para modelar precios futuros de activos como Bitcoin y S&amp;P 500. Combina modelos
                ARIMA (media), GARCH (volatilidad condicional) y simulación Monte Carlo para generar miles de trayectorias,
                bandas de incertidumbre y métricas de riesgo como VaR y CVaR.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "NumPy", "ARIMA", "GARCH", "Monte Carlo", "VaR & CVaR", "Plotly"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ImageIcon className="h-4 w-4" />
                <span>Estudio cuantitativo personal - Dashboard tipo Bloomberg / JP Morgan</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}