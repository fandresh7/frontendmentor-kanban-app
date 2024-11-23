import { Dialog, DialogModule } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core'
import { TaskModalComponent } from '../task-modal/task-modal.component'
import { Task } from '../../interfaces/boards'

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent {
  task = input.required<Task>()

  completedSubtasks = computed(() => {
    const completed = this.task().subtasks.filter(s => s.isCompleted)
    return completed
  })

  dialog = inject(Dialog)

  openTaskModal() {
    this.dialog.open(TaskModalComponent, {
      autoFocus: ''
    })
  }
}
