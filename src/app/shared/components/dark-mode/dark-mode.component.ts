import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { DarkModeService } from '@shared/services/dark-mode.service'
import { MoonIconComponent, SunIconComponent } from '../icons/icons.component'

@Component({
  selector: 'dark-mode',
  imports: [SunIconComponent, MoonIconComponent],
  templateUrl: './dark-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeComponent {
  darkModeService = inject(DarkModeService)
  darkMode = computed(() => this.darkModeService.darkMode())
}
