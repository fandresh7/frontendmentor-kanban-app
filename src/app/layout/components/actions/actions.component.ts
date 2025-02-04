import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { Dialog } from '@angular/cdk/dialog'

import { TaskAddEditModalComponent } from '@tasks/components/task-add-edit-modal/task-add-edit-modal.component'
import { BoardAddEditModalComponent } from '@boards/components/board-add-edit-modal/board-add-edit-modal.component'
import { BoardDeleteModalComponent } from '@boards/components/board-delete-modal/board-delete-modal.component'

import { EllipsisIconComponent, plusIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'actions',
  imports: [plusIconComponent, EllipsisIconComponent],
  templateUrl: './actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center gap-2 ml-auto'
  }
})
export class ActionsComponent {
  dialog = inject(Dialog)

  actionDropdown = signal<boolean>(false)

  toggleActionDropdown() {
    this.actionDropdown.update(value => !value)
  }

  openCreateTaskModal() {
    this.actionDropdown.set(false)
    this.dialog.open(TaskAddEditModalComponent)
  }

  openEditBoardModal() {
    this.actionDropdown.set(false)
    this.dialog.open(BoardAddEditModalComponent)
  }

  openDeleteBoardModal() {
    this.actionDropdown.set(false)
    this.dialog.open(BoardDeleteModalComponent)
  }
}
