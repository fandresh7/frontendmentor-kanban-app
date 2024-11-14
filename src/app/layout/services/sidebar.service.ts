import { isPlatformBrowser } from '@angular/common'
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core'
import { debounceTime, fromEvent, map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  platformId = inject(PLATFORM_ID)
  sidebar = signal<boolean>(true)

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const resize$ = fromEvent(window, 'resize').pipe(
        debounceTime(100),
        map(event => {
          const windowElement = event.currentTarget as Window
          return windowElement.innerWidth
        })
      )

      resize$.subscribe(width => {
        this.sidebar.set(width > 768)
      })
    }
  }

  toggleSidebar() {
    this.sidebar.update(value => !value)
  }
}
