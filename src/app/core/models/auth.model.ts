export interface LoginResponse {
  ok: boolean
  user: User
  token: string
}

export interface User {
  name: string
  email: string
}
