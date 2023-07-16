import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-educational-experience',
  templateUrl: './educational-experience.component.html',
  styleUrls: ['./educational-experience.component.scss'],
})
export class EducationalExperienceComponent {
  formacionReglada!: any;
  formacionNoReglada!: any;
  idiomas!: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarFormacionReglada();
    this.cargarFormacionNoReglada();
    this.cargarCertificadosIdiomas();
  }

  cargarFormacionReglada() {
    this.http
      .get<any>(
        '../../../assets/json/educational-experiencies_regulated-training.json'
      )
      .subscribe((data1) => {
        this.formacionReglada = data1.formacionReglada;
      });
  }
  cargarFormacionNoReglada() {
    this.http
      .get<any>(
        '../../../assets/json/educational-experiencies_non-regulated-training.json'
      )
      .subscribe((data2) => {
        this.formacionNoReglada = data2.formacionNoReglada;
      });
  }
  cargarCertificadosIdiomas() {
    this.http
      .get<any>(
        '../../../assets/json/languages.json'
      )
      .subscribe((data3) => {
        this.idiomas = data3.idiomas;
      });
  }
}
