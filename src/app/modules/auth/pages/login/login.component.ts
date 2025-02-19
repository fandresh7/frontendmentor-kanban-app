import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '@core/services/auth.service'
import { DarkModeComponent } from '@shared/components/dark-mode/dark-mode.component'
import { LogoIconComponent } from '@shared/components/icons/icons.component'

interface LoginForm {
  email: FormControl<string>
  password: FormControl<string>
}

@Component({
  selector: 'login',
  imports: [ReactiveFormsModule, LogoIconComponent, DarkModeComponent],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-lvh grid place-items-center p-4'
  }
})
export class LoginComponent {
  router = inject(Router)

  fb = inject(NonNullableFormBuilder)
  authService = inject(AuthService)

  loading = signal<boolean>(false)

  form = this.fb.group<LoginForm>({
    email: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  })

  async submit() {
    if (this.form.invalid) return

    this.loading.set(true)

    const { email, password } = this.form.getRawValue()
    await this.authService.login(email, password)

    this.loading.set(false)
    this.router.navigate(['/'])
  }
}
