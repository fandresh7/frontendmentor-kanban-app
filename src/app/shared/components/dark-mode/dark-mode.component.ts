import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'dark-mode',
  imports: [],
  templateUrl: './dark-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeComponent {}
