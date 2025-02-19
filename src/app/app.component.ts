import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { DarkModeService } from '@shared/services/dark-mode.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  darkModeService = inject(DarkModeService)
}
