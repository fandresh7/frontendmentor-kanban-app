import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'system',
    loadComponent: () => import('./design-system/pages/system/system.component').then(c => c.SystemComponent)
  }
]
