import { Component, Input } from '@angular/core';
import { WorkingExperience } from './working-experience.model';

@Component({
  selector: 'app-working-exp-detail',
  templateUrl: './working-exp-detail.component.html',
  styleUrls: ['./working-exp-detail.component.scss']
})
export class WorkingExpDetailComponent {

  datos!: any;
  @Input() detallesTrabajos?: WorkingExperience;

}
