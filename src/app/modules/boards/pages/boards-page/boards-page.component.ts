import { ChangeDetectionStrategy, Component } from '@angular/core'
import { BoardComponent } from '@boards/components/board/board.component'

@Component({
  selector: 'boards-page',
  imports: [BoardComponent],
  templateUrl: './boards-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardsPageComponent {}
