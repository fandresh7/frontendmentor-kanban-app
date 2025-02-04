import { effect, inject, Injectable, signal } from '@angular/core'
import { LocalStorageService } from './local-storage.service'
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  localStorageService = inject(LocalStorageService)
  document = inject(DOCUMENT)

  #darkModeSignal = signal<boolean>(false)
  darkMode = this.#darkModeSignal.asReadonly()

  constructor() {
    this.initDarkMode()

    effect(() => {
      const darkMode = this.darkMode()
      this.localStorageService.setItem('theme', darkMode ? 'dark' : 'light')
    })
  }

  private initDarkMode() {
    const theme = this.localStorageService.getItem('theme')
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (theme === 'dark' || (!theme && prefersDarkMode)) {
      this.#darkModeSignal.set(true)
      this.document.documentElement.classList.add('dark')
    } else {
      this.document.documentElement.classList.remove('dark')
      this.#darkModeSignal.set(false)
    }
  }

  toggleDarkMode() {
    const isDarkMode = this.document.documentElement.classList.toggle('dark')
    this.#darkModeSignal.set(isDarkMode)
  }
}
