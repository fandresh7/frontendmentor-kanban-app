import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@core/services/auth.service'
import { LocalStorageService } from '@shared/services/local-storage.service'
import { tap } from 'rxjs'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const localStorage = inject(LocalStorageService)
  const router = inject(Router)

  return next(req).pipe(
    tap({
      error: err => {
        if (err.status === 401) {
          authService.isAuthenticated.set(false)
          localStorage.removeItem('token')

          router.navigate(['/login'])
        }
      }
    })
  )
}
