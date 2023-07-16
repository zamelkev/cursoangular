import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-working-experience',
  templateUrl: './working-experience.component.html',
  styleUrls: ['./working-experience.component.scss']
})
export class WorkingExperienceComponent {

  datos!: any

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
}
