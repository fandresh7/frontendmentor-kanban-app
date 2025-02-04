import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
