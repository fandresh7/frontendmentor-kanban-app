import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { Dialog } from '@angular/cdk/dialog'
import { OverlayModule } from '@angular/cdk/overlay'

import { TaskAddEditModalComponent } from '@tasks/components/task-add-edit-modal/task-add-edit-modal.component'
import { BoardAddEditModalComponent } from '@boards/components/board-add-edit-modal/board-add-edit-modal.component'
import { BoardDeleteModalComponent } from '@boards/components/board-delete-modal/board-delete-modal.component'

import { EllipsisIconComponent, plusIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'actions',
  imports: [OverlayModule, plusIconComponent, EllipsisIconComponent],
  templateUrl: './actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center gap-2 ml-auto'
  }
})
export class ActionsComponent {
  dialog = inject(Dialog)
  isOpen = signal<boolean>(false)

  openBoardMenu() {
    this.isOpen.update(value => !value)
  }

  closeBoardMenu() {
    this.isOpen.set(false)
  }

  openCreateTaskModal() {
    this.closeBoardMenu()
    this.dialog.open(TaskAddEditModalComponent, {
      data: {
        type: 'new'
      }
    })
  }

  openEditBoardModal() {
    this.closeBoardMenu()
    this.dialog.open(BoardAddEditModalComponent, {
      data: {
        type: 'edit'
      }
    })
  }

  openDeleteBoardModal() {
    this.closeBoardMenu()
    this.dialog.open(BoardDeleteModalComponent)
  }
}
