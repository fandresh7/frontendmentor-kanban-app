import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { TaskStore } from '@tasks/store/task.store'

@Component({
  selector: 'task-delete-modal',
  imports: [],
  templateUrl: './task-delete-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg'
  }
})
export class TaskDeleteModalComponent {
  data = inject(DIALOG_DATA)
  dialogRef = inject(DialogRef<TaskDeleteModalComponent>)

  taskStore = inject(TaskStore)

  loading = signal<boolean>(false)

  async deleteTask() {
    const id = this.data.id
    if (!id) return

    this.loading.set(true)
    await this.taskStore.deleteTask(id)
    this.loading.set(false)

    this.closeModal()
  }

  closeModal() {
    this.dialogRef.close()
  }
}
