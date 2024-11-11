import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsComponent {}
