import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { plusIconComponent, EllipsisIconComponent } from '../../../shared/components/icons.component'

@Component({
  selector: 'actions',
  standalone: true,
  imports: [plusIconComponent, EllipsisIconComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center gap-2 ml-auto'
  }
})
export class ActionsComponent {
  actionDropdown = signal<boolean>(false)

  toggleActionDropdown() {
    this.actionDropdown.update(value => !value)
  }
}
