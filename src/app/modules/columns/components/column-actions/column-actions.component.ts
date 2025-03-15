import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core'
import { Column } from '@core/models/column.model'
import { CloseIconComponent, DragIconComponent, EditIconComponent } from '@shared/components/icons/icons.component'
import { ColumnDeleteModalComponent } from '../column-delete-modal/column-delete-modal.component'
import { DragDropModule } from '@angular/cdk/drag-drop'

@Component({
  selector: 'column-actions',
  imports: [DragDropModule, EditIconComponent, CloseIconComponent, DragIconComponent],
  templateUrl: './column-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnActionsComponent {
  dialog = inject(Dialog)

  column = input.required<Column>()

  openDeleteModal() {
    this.dialog.open(ColumnDeleteModalComponent, {
      data: {
        column: this.column()
      }
    })
  }
}
