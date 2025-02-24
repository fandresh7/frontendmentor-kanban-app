import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { tap } from 'rxjs'

import { AuthService } from '@core/services/auth/auth.service'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)

  return next(req).pipe(
    tap({
      error: err => {
        if (err.status === 401) {
          authService.logout()
        }
      }
    })
  )
}
