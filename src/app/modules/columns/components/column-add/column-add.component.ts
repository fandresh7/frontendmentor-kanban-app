import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { ColumnAddEditModalComponent } from '../column-add-edit-modal/column-add-edit-modal.component'
import { plusIconComponent } from '@shared/components/icons/icons.component'

@Component({
  selector: 'column-add',
  imports: [plusIconComponent],
  templateUrl: './column-add.component.html',
  styleUrls: ['./column-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pt-12'
  }
})
export class ColumnAddComponent {
  dialog = inject(Dialog)

  openModal() {
    this.dialog.open(ColumnAddEditModalComponent)
  }
}
