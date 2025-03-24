import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { LocalStorageService } from '@shared/services/local-storage.service'

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorage = inject(LocalStorageService)
  const token = localStorage.getItem('token')

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

  return next(req)
}
