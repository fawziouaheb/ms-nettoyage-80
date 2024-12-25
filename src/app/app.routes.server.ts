import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
{
    path: '',
    renderMode: RenderMode.Prerender  // Prérendu pour la page d'accueil
  },
  {
    path: '**', // Catch-all pour les autres routes
    renderMode: RenderMode.Prerender
  }
];
