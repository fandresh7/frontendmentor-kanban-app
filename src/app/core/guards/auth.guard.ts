import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '@core/services/auth/auth.service'

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.getIsAuthenticated()) {
    return true
  } else {
    router.navigate(['/login'])
    return false
  }
}
