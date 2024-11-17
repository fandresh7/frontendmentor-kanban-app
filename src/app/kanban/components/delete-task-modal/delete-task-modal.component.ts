import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

@Component({
  selector: 'delete-task-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-task-modal.component.html',
  styleUrl: './delete-task-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg'
  }
})
export class DeleteTaskModalComponent {
  dialogRef = inject(DialogRef<DeleteTaskModalComponent>)

  closeModal() {
    this.dialogRef.close()
  }
}
