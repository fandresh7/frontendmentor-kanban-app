import { Dialog, DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { EllipsisIconComponent } from '../../../shared/components/icons.component'
import { AddEditTaskModalComponent } from '../add-edit-task-modal/add-edit-task-modal.component'
import { DeleteTaskModalComponent } from '../delete-task-modal/delete-task-modal.component'
import { Task } from '../../interfaces/boards'

@Component({
  selector: 'task-modal',
  standalone: true,
  imports: [DialogModule, EllipsisIconComponent],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class TaskModalComponent {
  dialog = inject(Dialog)
  data = inject<Task>(DIALOG_DATA)
  dialogRef = inject(DialogRef<AddEditTaskModalComponent>)

  actionDropdown = signal<boolean>(false)

  toggleActionDropdown() {
    this.actionDropdown.update(value => !value)
  }

  openEditTaskModal() {
    this.closeModal()

    this.dialog.open(AddEditTaskModalComponent, {
      autoFocus: undefined,
      data: this.data
    })
  }

  openDeleteTaskModal() {
    this.closeModal()
    this.dialog.open(DeleteTaskModalComponent, {
      autoFocus: undefined,
      data: this.data
    })
  }

  closeModal() {
    this.dialogRef.close()
  }
}
