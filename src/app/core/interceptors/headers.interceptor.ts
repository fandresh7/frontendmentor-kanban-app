import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorageService } from '@shared/services/local-storage.service'

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorage = inject(LocalStorageService)
  const router = inject(Router)

  const token = localStorage.getItem('token')
  if (!token) router.navigate(['/auth', 'login'])

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

  return next(req)
}
