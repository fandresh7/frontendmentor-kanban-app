import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'

import { routes } from './app.routes'
import { messagesInterceptor } from './core/interceptors/messages.interceptor'
import { headersInterceptor } from '@core/interceptors/headers.interceptor'
import { authInterceptor } from '@core/interceptors/auth.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([headersInterceptor, authInterceptor, messagesInterceptor]))
  ]
}
