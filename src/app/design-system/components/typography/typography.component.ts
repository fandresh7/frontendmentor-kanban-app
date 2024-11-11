import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'typography',
  standalone: true,
  imports: [],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypographyComponent {}
