import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent {}
