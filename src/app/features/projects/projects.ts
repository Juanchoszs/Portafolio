import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  projects = [
    {
      id: 'gol-ica',
      title: 'Gol ICA',
      role: 'Club de Fútbol',
      description: 'Plataforma completa para club de fútbol que incluye administración de jugadores, control de fisioterapias, gestión de partidos y estadísticas.',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://golica.vercel.app/',
      isPrivate: false,
      image: 'assets/images/image.png'
    },
    {
      id: 'cromu',
      title: 'CROMU',
      role: 'Fondo de ahorros y préstamos',
      description: 'Sistema bancario completo que incluye gestión de cuentas para clientes y administradores, tablas de amortización, generación de vouchers, manejo de pagos y estados, y CRUD avanzado. Autenticación JWT.',
      tags: ['React', 'TypeScript', 'PostgreSQL', 'JWT', 'bcrypt'],
      link: null,
      isPrivate: false,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ss9Yc7Z9IPhIp9nVprQzDnfc1cy01v.png'
    },
    {
      id: 'siigo',
      title: 'Integración Siigo',
      role: 'Sistema de facturación con analítica avanzada',
      description: 'Plataforma privada de facturación con integración a Siigo. Incluye creación y gestión de facturas, consulta de documentos, y análisis avanzado de datos mediante carga de archivos Excel.',
      tags: ['React', 'TypeScript', 'Siigo API', 'OAuth 2.0', 'PostgreSQL'],
      link: null,
      isPrivate: true,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JS9vG5Pg7g0uVGnYLd6VlxQ3KZ0gvz.png'
    },
    {
      id: 'fuec',
      title: 'Generador de Documentos FUEC',
      role: 'Sistema de gestión de contratos de transporte',
      description: 'Aplicación para la generación automática de documentos FUEC. Incluye gestión de información de contratos, características de vehículos y conductores. Sistema con validación de datos.',
      tags: ['React', 'TypeScript', 'PDF Generation', 'Form Validation'],
      link: null,
      isPrivate: true,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xXOAzEv42o31085mK2tz7fTVRyOH2X.png'
    },
    {
      id: 'remesas',
      title: 'Remesas y Mensajes',
      role: 'Plataforma de envíos y mensajería',
      description: 'Sitio web informativo para empresa de envíos y mensajería. Presenta servicios de transporte con diseño elegante de glasmorfismo en blanco y negro.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Glassmorphism'],
      link: '#',
      isPrivate: false,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ae5LDoeE2GRwec4A1nvchGdrhPGKRM.png'
    },
    {
      id: 'trazabilidad',
      title: 'Trazabilidad Remesas',
      role: 'Sistema de gestión logística multi-empresa',
      description: 'Dashboard administrativo para el seguimiento y control de envíos y devoluciones para empresas como Natura, Leoniza y Yanbal. Analítica con indicadores y gráficos.',
      tags: ['React', 'Tailwind CSS', 'Chart.js', 'Dashboard'],
      link: null,
      isPrivate: true,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MV2xUYDKt6kfI7mxO05uCvloCDv1ob.png'
    },
    {
      id: 'quantum',
      title: 'Quantum Financial',
      role: 'Proyección Monte Carlo con ARIMA + GARCH',
      description: 'Dashboard cuantitativo para modelar precios futuros de activos. Combina modelos ARIMA, GARCH y simulación Monte Carlo para métricas de riesgo como VaR y CVaR.',
      tags: ['Python', 'Pandas', 'ARIMA', 'Plotly'],
      link: null,
      isPrivate: true,
      image: 'assets/images/SP_1.jpeg'
    }
  ];
}
