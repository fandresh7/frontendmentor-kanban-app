import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { Dialog, DialogModule } from '@angular/cdk/dialog'

import { plusIconComponent, EllipsisIconComponent } from '../../../shared/components/icons.component'
import { AddEditTaskModalComponent } from '../../../kanban/components/add-edit-task-modal/add-edit-task-modal.component'
import { DeleteBoardModalComponent } from '../../../kanban/components/delete-board-modal/delete-board-modal.component'
import { AddEditBoardModalComponent } from '../../../kanban/components/add-edit-board-modal/add-edit-board-modal.component'

@Component({
  selector: 'actions',
  standalone: true,
  imports: [DialogModule, plusIconComponent, EllipsisIconComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
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
    this.dialog.open(AddEditTaskModalComponent)
  }

  openEditBoardModal() {
    this.actionDropdown.set(false)
    this.dialog.open(AddEditBoardModalComponent)
  }

  openDeleteBoardModal() {
    this.actionDropdown.set(false)
    this.dialog.open(DeleteBoardModalComponent)
  }
}
