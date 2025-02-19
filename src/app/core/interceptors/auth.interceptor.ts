import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@core/services/auth.service'
import { LocalStorageService } from '@shared/services/local-storage.service'
import { catchError, throwError } from 'rxjs'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const localStorage = inject(LocalStorageService)
  const router = inject(Router)

  return next(req).pipe(
    catchError(err => {
      if (err.status === 401) {
        authService.isAuthenticated.set(false)
        localStorage.removeItem('token')
        router.navigate(['/auth', 'login'])

        return throwError(() => err) // 🔥 STOPS execution of other interceptors
      }

      return throwError(() => err) // Keeps other errors in the chain
    })
  )
}
