import { Routes } from '@angular/router'
import { LayoutComponent } from '@layout/layout.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/boards/boards.routes').then(r => r.routes)
      }
    ]
  }
]
