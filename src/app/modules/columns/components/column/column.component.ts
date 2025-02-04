import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { Column } from '@columns/interfaces/columns.interface'

@Component({
  selector: 'column',
  imports: [],
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent {
  column = input.required<Column>()
}
