import { Routes } from '@angular/router'
import { authGuard } from '@core/guards/auth.guard'
import { LayoutComponent } from '@layout/layout.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/boards/boards.routes').then(r => r.routes)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then(r => r.routes)
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
]
