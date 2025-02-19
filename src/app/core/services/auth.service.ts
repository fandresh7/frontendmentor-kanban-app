import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { environment } from '../../../environments/environment'
import { firstValueFrom } from 'rxjs'
import { LoginResponse } from '@core/models/auth.model'
import { LocalStorageService } from '@shared/services/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = environment.url

  private readonly localStorage = inject(LocalStorageService)

  isAuthenticated = signal<boolean>(false)

  async login(email: string, password: string): Promise<LoginResponse> {
    const url = `${this.baseUrl}/api/auth/login`

    const response$ = this.http.post<LoginResponse>(url, { email, password })
    const response = await firstValueFrom(response$)

    const token = response.token

    this.localStorage.setItem('token', token)
    this.isAuthenticated.set(true)

    return response
  }
}
