import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorageService } from '@shared/services/local-storage.service'
import { tap } from 'rxjs'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorage = inject(LocalStorageService)
  const router = inject(Router)

  return next(req).pipe(
    tap({
      error: err => {
        if (err.status === 401) {
          localStorage.removeItem('token')

          router.navigate(['/login'])
        }
      }
    })
  )
}
