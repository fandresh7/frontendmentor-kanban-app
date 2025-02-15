import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http'
import { inject } from '@angular/core'
import { delay, tap } from 'rxjs'

import { ToastsMessagesService } from '@shared/services/toasts-messages.service'
import { ErrorResponse } from '../models/errors.model'

export const messagesInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastsMessagesService)

  return next(req).pipe(
    delay(500),
    tap({
      next: (event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse) {
          const body = event.body as ErrorResponse
          const toastState = body.status >= 400 ? 'error' : 'success'

          if (body.message) {
            toastService.showToast(toastState, body.message)
          }
        }
      },
      error: err => {
        if (err.error?.message) {
          toastService.showToast('error', err.error.message)
        }
      }
    })
  )
}
