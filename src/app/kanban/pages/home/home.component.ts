import { ChangeDetectionStrategy, Component } from '@angular/core'
import { BoardComponent } from '../../components/board/board.component'

@Component({
  selector: 'home',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
