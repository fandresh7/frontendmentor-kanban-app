import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { firstValueFrom } from 'rxjs'
import { LoginResponse } from '@core/models/auth.model'
import { LocalStorageService } from '@shared/services/local-storage.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = environment.url

  private readonly localStorage = inject(LocalStorageService)
  private readonly router = inject(Router)

  async login(email: string, password: string): Promise<LoginResponse> {
    const url = `${this.baseUrl}/api/auth/login`

    const response$ = this.http.post<LoginResponse>(url, { email, password })
    const response = await firstValueFrom(response$)

    const token = response.token

    this.localStorage.setItem('token', token)

    return response
  }

  getIsAuthenticated(): boolean {
    const token = this.localStorage.getItem('token')
    return !!token
  }

  logout() {
    this.localStorage.removeItem('token')
    this.router.navigate(['/auth/login'])
  }
}
