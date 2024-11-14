import { Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./kanban/pages/home/home.component').then(c => c.HomeComponent)
      }
    ]
  },
  {
    path: 'system',
    loadComponent: () => import('./design-system/pages/system/system.component').then(c => c.SystemComponent)
  }
]
