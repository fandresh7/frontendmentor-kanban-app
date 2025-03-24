import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { LogoIconComponent } from '@shared/components/icons/icons.component'
import { DarkModeComponent } from '@shared/components/dark-mode/dark-mode.component'
import { AuthService } from '@core/services/auth/auth.service'

@Component({
  selector: 'register',
  imports: [ReactiveFormsModule, LogoIconComponent, DarkModeComponent],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-lvh grid place-items-center p-4'
  }
})
export class RegisterComponent {
  fb = inject(NonNullableFormBuilder)
  authService = inject(AuthService)
  router = inject(Router)

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  loading = signal(false)

  async submit() {
    if (this.form.invalid) return

    this.loading.set(true)

    try {
      const { name, email, password } = this.form.getRawValue()
      await this.authService.register(name, email, password)
      this.router.navigate(['/'])
    } finally {
      this.loading.set(false)
    }
  }
}
