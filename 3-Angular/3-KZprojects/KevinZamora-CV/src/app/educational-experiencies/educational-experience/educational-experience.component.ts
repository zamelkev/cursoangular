import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-educational-experience',
  templateUrl: './educational-experience.component.html',
  styleUrls: ['./educational-experience.component.scss']
})
export class EducationalExperienceComponent {
  formacion!: any
  formacionReglada!: any
  formacionNoReglada!: any

  constructor(private http: HttpClient){}

ngOnInit(){
  // this.cargarFormacion();
  this.cargarFormacionReglada();
  // this.cargarFormacionNoReglada();
}


cargarFormacionReglada() {
  this.http.get<any>('../../../assets/json/educational-experiencies_regulated-training.json').subscribe(
    data => {
      this.formacionReglada = data.formacionReglada;
    })
}
// cargarFormacionReglada() {
//   this.http.get<any>('../../../assets/json/educational-experiencies.json').subscribe(
//     data => {
//       this.formacionReglada = data.formacionReglada;
//     })
// }
// cargarFormacionNoReglada() {
//   this.http.get<any>('../../../assets/json/educational-experiencies.json').subscribe(
//     data => {
//       this.formacionNoReglada = data.formacionNoReglada;
//     })
// }
}
