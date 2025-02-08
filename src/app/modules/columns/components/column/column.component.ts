import { UpperCasePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'

import { Column } from '@columns/interfaces/columns.interface'

@Component({
  selector: 'column',
  imports: [UpperCasePipe],
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'max-h-full'
  }
})
export class ColumnComponent {
  column = input.required<Column>()
}
