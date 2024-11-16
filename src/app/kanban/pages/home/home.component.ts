import { ChangeDetectionStrategy, Component } from '@angular/core'
import { plusIconComponent } from '../../../shared/components/icons.component'

@Component({
  selector: 'home',
  standalone: true,
  imports: [plusIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
