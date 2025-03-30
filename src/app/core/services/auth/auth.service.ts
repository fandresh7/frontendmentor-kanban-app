import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

import { LoginResponse } from '@core/models/auth.model'
import { LocalStorageService } from '@shared/services/local-storage.service'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = environment.url

  private readonly localStorage = inject(LocalStorageService)

  private demoAccount = { email: 'demo@demo.com', password: '123456' }
  private demoUser = { name: 'demo', email: 'demo@demo.com' }

  async login(email: string, password: string): Promise<LoginResponse> {
    if (email === this.demoAccount.email) {
      this.localStorage.setItem('token', 'demo-token')
      return { ok: true, user: this.demoUser, token: 'demo-token' }
    }

    const url = `${this.baseUrl}/api/auth/login`

    const response$ = this.http.post<LoginResponse>(url, { email, password })
    const response = await firstValueFrom(response$)

    const token = response.token

    this.localStorage.setItem('token', token)

    return response
  }

  async register(name: string, email: string, password: string) {
    const url = `${this.baseUrl}/api/auth/register`

    const response$ = this.http.post<LoginResponse>(url, { name, email, password })
    const response = await firstValueFrom(response$)

    const token = response.token
    this.localStorage.setItem('token', token)

    return response
  }

  getIsAuthenticated(): boolean {
    const token = this.localStorage.getItem('token')
    return !!token
  }

  isDemoAccount() {
    const token = this.localStorage.getItem('token')
    return token === 'demo-token'
  }

  logout() {
    this.localStorage.removeItem('token')
    window.location.reload()
  }
}
