import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { ColumnAddEditModalComponent } from '@columns/components/column-add-edit-modal/column-add-edit-modal.component'
import { plusIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'empty-board',
  imports: [plusIconComponent],
  templateUrl: './empty-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyBoardComponent {
  dialog = inject(Dialog)

  openModal() {
    this.dialog.open(ColumnAddEditModalComponent, {
      data: {
        type: 'new'
      }
    })
  }
}
