import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core'
import { DragDropModule } from '@angular/cdk/drag-drop'

import { ColumnDeleteModalComponent } from '../column-delete-modal/column-delete-modal.component'
import { ColumnAddEditModalComponent } from '../column-add-edit-modal/column-add-edit-modal.component'
import { CloseIconComponent, DragIconComponent, EditIconComponent } from '@shared/components/icons/icons.component'
import { Column } from '@core/models/column.model'

@Component({
  selector: 'column-actions',
  imports: [DragDropModule, EditIconComponent, CloseIconComponent, DragIconComponent],
  templateUrl: './column-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnActionsComponent {
  dialog = inject(Dialog)

  column = input.required<Column>()

  openEditModal() {
    this.dialog.open(ColumnAddEditModalComponent, {
      data: {
        type: 'edit',
        column: this.column()
      }
    })
  }

  openDeleteModal() {
    this.dialog.open(ColumnDeleteModalComponent, {
      data: {
        column: this.column()
      }
    })
  }
}
