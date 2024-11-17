import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CloseIconComponent } from '../../../shared/components/icons.component'
import { AddEditTaskModalComponent } from '../add-edit-task-modal/add-edit-task-modal.component'

@Component({
  selector: 'task-modal',
  standalone: true,
  imports: [CloseIconComponent],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg max-h-dvh overflow-y-auto'
  }
})
export class TaskModalComponent {
  dialogRef = inject(DialogRef<AddEditTaskModalComponent>)

  closeModal() {
    this.dialogRef.close()
  }
}
