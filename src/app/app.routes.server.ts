import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // La ruta dinámica de detalle de proyectos se renderiza en el cliente
    // para evitar la necesidad de getPrerenderParams con IDs dinámicos
    path: 'projects/:id',
    renderMode: RenderMode.Client
  },
  {
    // Todas las demás rutas estáticas se pre-renderizan para máximo SEO/performance
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
