import { ChangeDetectionStrategy, Component } from '@angular/core'
import { plusIconComponent } from '../../../shared/components/icons.component'

@Component({
  selector: 'empty-board',
  standalone: true,
  imports: [plusIconComponent],
  templateUrl: './empty-board.component.html',
  styleUrl: './empty-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyBoardComponent {}
