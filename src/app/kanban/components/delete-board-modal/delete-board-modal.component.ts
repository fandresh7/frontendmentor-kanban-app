import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

@Component({
  selector: 'delete-board-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-board-modal.component.html',
  styleUrl: './delete-board-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg'
  }
})
export class DeleteBoardModalComponent {
  dialogRef = inject(DialogRef<DeleteBoardModalComponent>)

  closeModal() {
    this.dialogRef.close()
  }
}
