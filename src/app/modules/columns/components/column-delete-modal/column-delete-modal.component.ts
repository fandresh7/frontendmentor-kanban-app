import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { Column } from '@core/models/column.model'

interface DeleteColumnData {
  column: Column
}

@Component({
  selector: 'column-delete-modal',
  imports: [],
  templateUrl: './column-delete-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-theme-white dark:bg-theme-charcoal p-6 block rounded-lg'
  }
})
export class ColumnDeleteModalComponent {
  dialogRef = inject(DialogRef<ColumnDeleteModalComponent>)
  data = inject<DeleteColumnData>(DIALOG_DATA)

  loading = signal<boolean>(false)

  closeModal() {
    this.dialogRef.close()
  }

  async deleteColumn() {
    console.log('delete')
  }
}
