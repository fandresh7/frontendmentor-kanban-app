import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { plusIconComponent } from '../../../shared/components/icons.component'
import { Dialog, DialogModule } from '@angular/cdk/dialog'
import { AddEditColumnModalComponent } from '../add-edit-column-modal/add-edit-column-modal.component'

@Component({
  selector: 'add-new-column',
  standalone: true,
  imports: [DialogModule, plusIconComponent],
  templateUrl: './add-new-column.component.html',
  styleUrl: './add-new-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pt-12'
  }
})
export class AddNewColumnComponent {
  dialog = inject(Dialog)

  openModal() {
    this.dialog.open(AddEditColumnModalComponent)
  }
}
