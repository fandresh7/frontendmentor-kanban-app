import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'colors',
  standalone: true,
  imports: [],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorsComponent {

}
