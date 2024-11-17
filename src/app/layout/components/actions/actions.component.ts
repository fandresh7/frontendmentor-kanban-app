import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { plusIconComponent, EllipsisIconComponent } from '../../../shared/components/icons.component'
import { Dialog, DialogModule } from '@angular/cdk/dialog'
import { AddEditTaskModalComponent } from '../../../kanban/components/add-edit-task-modal/add-edit-task-modal.component'
import { DeleteBoardModalComponent } from '../../../kanban/components/delete-board-modal/delete-board-modal.component'

@Component({
  selector: 'actions',
  standalone: true,
  imports: [DialogModule, plusIconComponent, EllipsisIconComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center gap-2 ml-auto'
  }
})
export class ActionsComponent {
  dialog = inject(Dialog)

  actionDropdown = signal<boolean>(false)

  toggleActionDropdown() {
    this.actionDropdown.update(value => !value)
  }

  openCreateUpdateTaskModal() {
    this.actionDropdown.set(false)
    this.dialog.open(AddEditTaskModalComponent)
  }

  openDeleteTaskModal() {
    this.actionDropdown.set(false)
    this.dialog.open(DeleteBoardModalComponent)
  }
}
