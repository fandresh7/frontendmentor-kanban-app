import { ChangeDetectionStrategy, Component } from '@angular/core'
import { plusIconComponent } from '../../../shared/components/icons.component'

@Component({
  selector: 'add-new-column',
  standalone: true,
  imports: [plusIconComponent],
  templateUrl: './add-new-column.component.html',
  styleUrl: './add-new-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pt-12'
  }
})
export class AddNewColumnComponent {}
