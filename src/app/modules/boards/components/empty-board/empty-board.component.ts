import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'empty-board',
  imports: [],
  templateUrl: './empty-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyBoardComponent {}
