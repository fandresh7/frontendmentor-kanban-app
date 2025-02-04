import { UpperCasePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'

import { Column } from '@columns/interfaces/columns.interface'
import { TaskCardComponent } from '@tasks/components/task-card/task-card.component'

@Component({
  selector: 'column',
  imports: [TaskCardComponent, UpperCasePipe],
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'max-h-full'
  }
})
export class ColumnComponent {
  column = input.required<Column>()
}
