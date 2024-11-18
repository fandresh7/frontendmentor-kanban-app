import { BreakpointObserver } from '@angular/cdk/layout'
import { afterNextRender, inject, Injectable, signal } from '@angular/core'
import { first } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  breakpointObserver = inject(BreakpointObserver).observe(['(max-width: 768px)'])

  sidebar = signal<boolean>(false)

  constructor() {
    afterNextRender(() => {
      this.initializeSidebarState()
    })
  }

  // Initializes the sidebar state based on screen size.
  // If the screen width is less than or equal to 768px (mobile view), the sidebar is hidden.
  // If the screen width is greater than 768px (web view), the sidebar is visible.
  private initializeSidebarState() {
    this.breakpointObserver.subscribe(({ matches }) => {
      this.sidebar.set(!matches)
    })
  }

  // Close sidebar in mobile when change board or create a new one.
  closeSidebar() {
    this.breakpointObserver.pipe(first()).subscribe(({ matches }) => {
      if (matches) this.sidebar.set(false)
    })
  }

  toggleSidebar() {
    this.sidebar.update(value => !value)
  }
}
