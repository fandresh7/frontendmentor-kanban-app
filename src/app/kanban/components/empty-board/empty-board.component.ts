import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'empty-board',
  standalone: true,
  imports: [],
  templateUrl: './empty-board.component.html',
  styleUrl: './empty-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyBoardComponent {

}
