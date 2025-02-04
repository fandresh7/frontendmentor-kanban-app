import { HttpInterceptorFn } from '@angular/common/http'
import { catchError, throwError } from 'rxjs'

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(error => {
      console.error('Error HTTP interceptado:', error.error.message)
      return throwError(() => error)
    })
  )
}
