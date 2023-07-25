import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'KevinZamora-CV';

  datos!: any;

  //PASO 3 Inyectar el servicio HttpClient en el constructor
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarDatos(); // Llamamos a la función cargarDatos en el inicializador
  }

  //PASO 4 Crear la función del observable e inicialízala en el método ngOnInit(){}

  cargarDatos() {
    this.http.get<any>('../../assets/datos.json').subscribe((data) => {
      this.datos = data.datos;
    });
  }
}
