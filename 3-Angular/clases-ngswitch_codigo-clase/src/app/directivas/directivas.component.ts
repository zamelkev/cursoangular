import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  opcion: string;

//EJEMPLO 2

metodoEnvio: string;
costoEnvio: number;

  constructor() {
    this.opcion = 'Z';
    //EJEMPLO 2
    this.metodoEnvio = 'estandar';
    this.costoEnvio = 0;
  }

  ngOnInit(): void {
  }
//EJEMPLO 2

actualizarCostoEnvio() {
  switch (this.metodoEnvio) {
    case 'estandar':
      this.costoEnvio = 5;
      break;
    case 'prioritario':
      this.costoEnvio = 10;
      break;
    case 'express':
      this.costoEnvio = 20;
      break;
    default:
      this.costoEnvio = 0;
      break;
  }
}
}




  

  

