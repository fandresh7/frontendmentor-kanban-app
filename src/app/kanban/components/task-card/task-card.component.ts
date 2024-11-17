import { Dialog, DialogModule } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { TaskModalComponent } from '../task-modal/task-modal.component'

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent {
  dialog = inject(Dialog)

  openTaskModal() {
    this.dialog.open(TaskModalComponent)
  }
}
