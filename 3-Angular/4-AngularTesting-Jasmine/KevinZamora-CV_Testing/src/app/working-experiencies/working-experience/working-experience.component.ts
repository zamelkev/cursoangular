import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkingExperience } from '../working-exp-detail/working-experience.model';

@Component({
  selector: 'app-working-experience',
  templateUrl: './working-experience.component.html',
  styleUrls: ['./working-experience.component.scss']
})
export class WorkingExperienceComponent {

  datos!: any;
  experienciaSeleccionada!: WorkingExperience;

  constructor(private http: HttpClient){}

ngOnInit(){
  this.cargarDatos();

}

cargarDatos() {
  this.http.get<any>('../../../assets/json/working-experiencies.json').subscribe(
    data => {
      this.datos = data.datos;
    })
}

seleccionarExperienciaLaboral(experiencia: WorkingExperience): void {
  this.experienciaSeleccionada = experiencia;
}
}
