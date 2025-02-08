import { Dialog, DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { Task } from '@tasks/interfaces/tasks.interface'
import { TaskAddEditModalComponent } from '../task-add-edit-modal/task-add-edit-modal.component'
import { TaskDeleteModalComponent } from '../task-delete-modal/task-delete-modal.component'
import { EllipsisIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'task-details-modal',
  imports: [EllipsisIconComponent],
  templateUrl: './task-details-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class TaskDetailsModalComponent {
  dialog = inject(Dialog)
  data = inject<Task>(DIALOG_DATA)
  dialogRef = inject(DialogRef<TaskDetailsModalComponent>)

  actionDropdown = signal<boolean>(false)

  toggleActionDropdown() {
    this.actionDropdown.update(value => !value)
  }

  openEditTaskModal() {
    this.closeModal()

    this.dialog.open(TaskAddEditModalComponent, {
      autoFocus: undefined,
      data: this.data
    })
  }

  openDeleteTaskModal() {
    this.closeModal()
    this.dialog.open(TaskDeleteModalComponent, {
      autoFocus: undefined,
      data: this.data
    })
  }

  closeModal() {
    this.dialogRef.close()
  }
}
