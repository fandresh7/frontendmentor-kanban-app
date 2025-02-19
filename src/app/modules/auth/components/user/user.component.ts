import { OverlayModule } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { AuthService } from '@core/services/auth/auth.service'

@Component({
  selector: 'user',
  imports: [OverlayModule],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'grid place-items-center h-10 w-10'
  }
})
export class UserComponent {
  authService = inject(AuthService)
  isOpen = signal<boolean>(false)

  openUserMenu() {
    this.isOpen.update(value => !value)
  }

  closeUserMenu() {
    this.isOpen.set(false)
  }

  logout() {
    this.authService.logout()
  }
}
