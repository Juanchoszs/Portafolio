"use client"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 print:p-0">
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
        {/* Header */}
        <header className="border-b-2 border-slate-800 pb-6 mb-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Juan Sebastian Rincon Linares</h1>
          <div className="text-sm text-slate-700 space-y-1">
            <p>Desarrollador Web</p>
            <p>Email: juanchopolas04090@gmail.com | Teléfono: 302 598 2458</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/juan-sebastian-rincon-linares-4794b9301/"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/juan-sebastian-rincon-linares
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/Juanchoszs" className="text-blue-600 hover:underline">
                github.com/Juanchoszs
              </a>
            </p>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">Resumen Profesional</h2>
          <p className="text-slate-700 leading-relaxed">
            Desarrollador web con 1.5 años de experiencia en la creación de aplicaciones web y sistemas de gestión
            empresarial. Experiencia en desarrollo frontend con React, TypeScript y Next.js, así como en integración de
            APIs y manejo de bases de datos PostgreSQL. Capacidad demostrada para trabajar en proyectos complejos de
            facturación, sistemas bancarios y análisis de datos.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">Experiencia Laboral</h2>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold text-slate-900">Desarrollador Web - CROMU</h3>
              <span className="text-sm text-slate-600">1 año</span>
            </div>
            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
              <li>Desarrollo de sistema de gestión de préstamos y ahorros con React y TypeScript</li>
              <li>Implementación de tablas de amortización y sistema de vouchers</li>
              <li>Creación de CRUD avanzado para manejo de pagos y estados</li>
              <li>Integración con base de datos PostgreSQL usando Neon</li>
              <li>Implementación de autenticación con JWT y OAuth 2.0</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold text-slate-900">Desarrollador Web - Proyecto Siigo</h3>
              <span className="text-sm text-slate-600">6 meses</span>
            </div>
            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
              <li>Integración con API de Siigo para sistema de facturación</li>
              <li>Desarrollo de panel de administración con análisis avanzado de datos</li>
              <li>Implementación de formularios de creación y consulta de facturas</li>
              <li>Manejo de carga y procesamiento de archivos Excel para análisis</li>
              <li>Desarrollo de sistema de autenticación y roles de usuario</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Backend & Herramientas</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                <li>PostgreSQL</li>
                <li>Neon Database</li>
                <li>JWT & OAuth 2.0</li>
                <li>bcrypt</li>
                <li>Axios</li>
                <li>Postman</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">DevOps & Control de Versiones</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Vercel</li>
                <li>Variables de entorno (.env)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Otros</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                <li>ESLint & Prettier</li>
                <li>Bash/Terminal</li>
                <li>Kotlin (básico)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">
            Proyectos Destacados
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">CROMU - Sistema de Gestión Financiera</h3>
              <p className="text-sm text-slate-600 mb-2">React, TypeScript, PostgreSQL, Neon</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm ml-4">
                <li>Sistema completo de gestión de préstamos y ahorros</li>
                <li>Tablas de amortización automáticas</li>
                <li>Sistema de vouchers y manejo de pagos</li>
                <li>Panel administrativo con roles de usuario</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">Integración Siigo - Sistema de Facturación</h3>
              <p className="text-sm text-slate-600 mb-2">React, TypeScript, API Siigo, PostgreSQL</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm ml-4">
                <li>Integración completa con API de Siigo</li>
                <li>Panel de administración con análisis de datos</li>
                <li>Creación y consulta de facturas de compra y venta</li>
                <li>Carga y procesamiento de archivos Excel</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">Generador de Documentos FUEC</h3>
              <p className="text-sm text-slate-600 mb-2">React, TypeScript</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm ml-4">
                <li>Sistema de generación de documentos de transporte</li>
                <li>Formularios dinámicos para información de contratos</li>
                <li>Gestión de características de vehículos y conductores</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 mt-8 pt-4 border-t border-slate-300">
          <p>Curriculum Vitae - Juan Sebastian Rincon Linares</p>
        </footer>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}
