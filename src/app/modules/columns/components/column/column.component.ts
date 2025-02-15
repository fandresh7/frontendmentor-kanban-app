import { UpperCasePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'

import { TaskListComponent } from '@tasks/components/task-list/task-list.component'
import { Column } from '@core/models/column.model'

@Component({
  selector: 'column',
  imports: [UpperCasePipe, TaskListComponent],
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'max-h-full'
  }
})
export class ColumnComponent {
  column = input.required<Column>()
  color = input.required<string>()
}
