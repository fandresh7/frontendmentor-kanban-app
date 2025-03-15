import { UpperCasePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'

import { TaskListComponent } from '@tasks/components/task-list/task-list.component'
import { Column } from '@core/models/column.model'
import { ColumnActionsComponent } from '../column-actions/column-actions.component'
import { CdkDragPlaceholder } from '@angular/cdk/drag-drop'

@Component({
  selector: 'column',
  imports: [UpperCasePipe, TaskListComponent, ColumnActionsComponent, CdkDragPlaceholder],
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'max-h-full group/column'
  }
})
export class ColumnComponent {
  column = input.required<Column>()
  color = input.required<string>()
}
