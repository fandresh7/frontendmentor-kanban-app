import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ColorsComponent } from '../../components/colors/colors.component'
import { TypographyComponent } from '../../components/typography/typography.component'
import { ButtonsComponent } from '../../components/buttons/buttons.component'
import { FormsComponent } from '../../components/forms/forms.component'

@Component({
  selector: 'system',
  standalone: true,
  imports: [ColorsComponent, TypographyComponent, ButtonsComponent, FormsComponent],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemComponent {}
