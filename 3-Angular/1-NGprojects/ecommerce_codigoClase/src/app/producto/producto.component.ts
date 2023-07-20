import { Component, OnInit } from '@angular/core';
import { Producto } from 'data.model'; 

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', precio: 10, descripcion: 'Descripción del Producto 1' },
    { id: 2, nombre: 'Producto 2', precio: 20, descripcion: 'Descripción del Producto 2' },
    { id: 3, nombre: 'Producto 3', precio: 30, descripcion: 'Descripción del Producto 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
