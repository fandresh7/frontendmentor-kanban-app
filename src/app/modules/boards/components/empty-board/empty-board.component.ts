import { ChangeDetectionStrategy, Component } from '@angular/core'
import { plusIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'empty-board',
  imports: [plusIconComponent],
  templateUrl: './empty-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyBoardComponent {}
