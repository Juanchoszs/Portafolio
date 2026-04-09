import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.scss']
})
export class ProjectDetailComponent implements OnInit {
  projectId: string | null = null;
  project: any = null;

  allProjects: any = {
    'gol-ica': {
      title: 'Gol ICA',
      role: 'SaaS de Administración Deportiva',
      subtitle: 'La revolución en la gestión integral de clubes de fútbol',
      description: 'Plataforma B2B para la digitalización administrativa y deportiva de la organización Gol ICA. Un ecosistema web que abarca desde la matriculación de canteranos hasta el seguimiento fisioterapéutico de los atletas.',
      challenge: 'Los clubes deportivos modernos aún dependen fuertemente de hojas de cálculo y registros físicos. Esto genera silos de información, pérdida de historiales médicos de jugadores y dificultades para realizar cobros recurrentes de manera efectiva. El objetivo principal fue migrar toda una estructura administrativa deportiva y técnica a la nube en una sola plataforma cohesionada.',
      solution: 'Desarrollo de un ecosistema Full Stack interactivo enfocado en Single Page Application (SPA). El sistema orquesta: perfiles jerárquicos de jugadores, módulos para el área de Fisioterapia para rastrear lesiones con mapas de calor corporal interactivos, tácticas de juego, e integración de pasarelas de pago. La plataforma escala globalmente gracias a una base relacional robusta y balanceo de carga.',
      stack: ['Front: React (Next.js), Tailwind CSS, Framer Motion', 'Back: Node.js, TypeScript', 'DB: PostgreSQL (Neon)', 'Despliegue: Vercel, Docker Containers'],
      link: 'https://golica.vercel.app/'
    },
    'cromu': {
      title: 'CROMU',
      role: 'Fintech: Fondo de Ahorros y Préstamos',
      subtitle: 'Un motor financiero transparente y auditado para gestión de capital',
      description: 'Plataforma privada Core Bancario diseñada para administrar el flujo de capital de clientes a través de tablas de amortización algorítmica, ahorros programados y generación transaccional de comprobantes.',
      challenge: 'Garantizar que un fondo de préstamos pueda generar proyecciones matemáticas precisas a diferentes tasas (EF, NA, etc.), mientras se proporciona a cada inversionista un portal de cliente ultra seguro para auditar sus aportes al centavo, con resiliencia ante pérdida de datos o intentos de fraude.',
      solution: 'Implementación rigurosa de algoritmos matemáticos dentro de un backend aislado, apoyado por micro-operaciones protegidas por Autenticación JWT y Bcrypt para las contraseñas. El frontend provee tablas de amortización de alto rendimiento construidas con React Data Grids, que re-renderizan instantáneamente las proyecciones usando TypeScript. Sistema transaccional 100% ACID.',
      stack: ['Front: React SPA, Tailwind', 'Seguridad: JWT, bcrypt, CORS', 'Backend: REST API, TypeScript', 'DB: PostgreSQL Relacional (ACID)'],
      link: null
    },
    'siigo': {
      title: 'Integración Siigo',
      role: 'Facturación & Analítica Tributaria',
      subtitle: 'Un hub de consolidación de datos con Siigo API y Machine Learning',
      description: 'Un ecosistema de tipo ERP extendido que se conecta con la suite oficial de Siigo para facturación electrónica, brindando una capa adicional de super-analítica de big data corporativo.',
      challenge: 'Las empresas recolectan miles de facturas mensuales sin lograr cruzar las métricas a tiempo real. La API de Siigo provee la información transaccional, pero el cliente necesitaba capacidades masivas de inyección desde archivos Excel pesados, depuración de registros duplicados por OAuth 2.0 y visualización de BI continua.',
      solution: 'Construí un Motor de Ingesta (ETL Pipeline) usando tecnologías en stream que permite arrastrar un Excel con miles de filas en Frontend y enviarlo al Backend en WebSockets. Los datos se validan, limpian y luego iteran asíncronamente pidiendo tokens a OAuth 2.0 de Siigo para insertar cada factura sin bloquear la UI, actualizando dashboards dinámicos de manera viva.',
      stack: ['Integración API: Siigo OAuth 2.0', 'Procesamiento: Web Workers / ETL pipelines', 'Backend: TypeScript, Node.js', 'Frontend: React, Chart.js, Tailwind CSS'],
      link: null
    },
    'fuec': {
      title: 'Generador Automatizado FUEC',
      role: 'Logística Legal e Impresión Automatizada',
      subtitle: 'Desmaterialización de los contratos de transporte FUEC del estado',
      description: 'Sistema empresarial de logística que permite la generación masiva e instantánea del Formato Único de Extracto del Contrato (FUEC) para el ministerio de transporte.',
      challenge: 'El ministerio exige que los extractos tengan datos codificados en tiempo real, validaciones cruzadas entre conductor-vehículo-empresa, control de vigencias al segundo y una presentación impecable al imprimir, o acarrea enormes multas operacionales. Las validaciones asíncronas cruzan con listados de seguros Soat y Tecnomecánica.',
      solution: 'Despliegue de un SPA arquitectónico fuertemente tipado en frontend con formularios reactivos monstruosos y validadores custom (RxJS/Formik). Con el backend generando un PDF del lado del servidor de manera programática mediante plantillas con Puppet / HTML2Canvas y firmándolo con un código único de seguimiento. 0% de errores matemáticos o de impresión.',
      stack: ['Lógica Formularia: React Hook Forms, Zod', 'PDF Engine: server-side rendering PDF', 'Backend: Node.js (Express)', 'Base de Datos: PostgreSQL'],
      link: null
    },
    'remesas': {
      title: 'Remesas y Mensajes',
      role: 'Portal Informativo & Trazabilidad Nivel 1',
      subtitle: 'Presencia corporativa moderna con Glassmorphism',
      description: 'Plataforma web enfocada a la presentación de portafolio y captura de clientes para una firma consolidada de logística y envíos express a gran escala. Muestra metodologías de carga, almacenes distribuidos, y cotizadores de volumen.',
      challenge: 'Convertir la fachada de una empresa logística operando a la vieja escuela en una startup con estética de vanguardia que atraiga a cuentas corporativas grandes. Se requería una UX/UI que transmitiera velocidad (mensajería) y precisión.',
      solution: 'Se codificó desde cero utilizando el paradigma de Next.js. El diseño se forjó enteramente bajo reglas de "Glassmorphism" y modo oscuro intensivo (Dark Mode Only). Las métricas CSR / SSR fueron optimizadas por debajo asegurando un Lighthouse Score de 95+ (First Contentful Paint < 0.6s) haciendo que el sitio sea indexado brutalmente por Google SEO.',
      stack: ['Render: Next.js (App Router), SSR', 'UI/UX: Tailwind CSS, CSS Grid', 'Patrón Visual: Dark Mode Glassmorphism', 'Deploy: Vercel Edge Network'],
      link: '#'
    },
    'trazabilidad': {
      title: 'Trazabilidad Remesas',
      role: 'Hub Central Logístico Operacional',
      subtitle: 'El cerebro logístico detrás de operaciones millonarias',
      description: 'Centro de control exclusivo para analistas, midiendo el embudo de efectividad diaria de decenas de flotas transportistas contra devoluciones de e-commerce o pérdida de mercancía avaluada.',
      challenge: 'Manejar reportes cruzados de mega corporaciones clientes (Natura, Yanbal) donde un envío devuelto cuesta dinero. Los teleoperadores debían actualizar el estatus en vivo y generar gráficas sobre quién es responsable de la baja efectividad sin sobrecargar la red.',
      solution: 'Dashboard Minimalista Blanco/Negro hiper-transparente. Uso extensivo de Chart.js y WebSockets para medir KPIs exactos. Panel de reportes condicional que clasifica el riesgo del paquete y envía push notifications silenciosas (SSE) si la desviación estadística cae fuera de los umbrales estipulados de efectividad (Six Sigma Logistics).',
      stack: ['Frontend: React (Estado complejo Redux/Zustand)', 'Gráficos: Chart.js, D3 elements', 'UI: Tailwind CSS', 'Backend: APIs REST con agregación paralela'],
      link: null
    },
    'quantum': {
      title: 'Quantum Financial Dashboard',
      role: 'Arquitectura de Datos Cuantitativa',
      subtitle: 'Modelos predictivos en S&P 500 y BTC mediante Python',
      description: 'Más allá de un simple sitio web, este es un Dashboard tipo Fintech Quantitative-Research, enfocado en predecir el camino caótico de los mercados bursátiles usando matemáticas duras estocásticas, uniendo Python con un motor presentacional front.',
      challenge: 'Tomar más de 30 años de historiales de precios de mercado (Yahoo Finance Pipeline), aplicarles la prueba de estacionariedad augmented Dickey-Fuller (ADF) y proyectar caminos bajo el cálculo estocástico (movimiento Browniano geométrico) sin que el sistema colapse por falta de RAM al vectorizar data.',
      solution: 'Construcción estricta de Data Pipelines en Python. El proceso limpia y ejecuta el ARIMA para predecir la media condicional del precio, ejecuta GARCH para modelar clústeres de volatilidad y despliega todo a un Dashboard interactivo Plotly Dash con métricas extremas financieras (VaR Histórico y Expected Shortfall). Visualización 3D interactiva real integrada en el frontend.',
      stack: ['Data Science: Python, Pandas, NumPy', 'Modelos Duros: Statsmodels (ARIMA/GARCH)', 'Simulación: Simulaciones Monte Carlo n=10000', 'UX de Datos: Plotly Interactive Graphs'],
      link: null
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
      if (this.projectId && this.allProjects[this.projectId]) {
        this.project = this.allProjects[this.projectId];
      }
    });
  }
}
