import { Component, OnInit } from '@angular/core';

class Entrada {

  nombre: string
  categoria: string
  precio: number

  constructor(nombre:string, categoria: string, precio: number) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }

}

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})

export class CineComponent implements OnInit {

  entradas:Entrada[] = []
  opcion: string;
  categoria: string;

  constructor() { 
    new Entrada("Regreso al futuro 2", "Ciencia Ficción", 5);
    new Entrada("Los 4 Fantasticos", "Ciencia Ficción", 5);
    new Entrada("Iron Man 1", "Ciencia Ficción", 5);
    new Entrada("Transformers: La era de la extinción", "Ciencia Ficción", 5);
    new Entrada("Ted 2", "Comedia", 5);
    new Entrada("2012", "Documental", 5);

    this.opcion = 'Z';
    this.categoria = 'indefinida';
    
  }

  actualizarCategoriaSeleccionada() {
    switch (this.opcion) {
      case 'Ciencia Ficcion':
        this.categoria = 'Ciencia Ficción';
      case 'comedia':
        this.categoria = 'Comedia';
      case 'documental':
        this.categoria = 'Documental';
    }
  }

  //   {nombre: "Regreso al futuro 2", categoria: "Ciencia Ficción", precio: 5},
  //   {nombre: "Los 4 Fantasticos", categoria: "Ciencia Ficción", precio: 5},
  //   {nombre: "Iron Man 1", categoria: "Ciencia Ficción", precio: 5},
  //   {nombre: "Transformers: La era de la extinción", categoria: "Ciencia Ficción", precio: 5},
  //   {nombre: "Ted 2", categoria: "Comedia", precio: 5},
  //   {nombre: "2012", categoria: "Documental", precio: 5},

  ngOnInit(): void {
    // console.log(this.entradas[0]);
    // console.log(this.entradas[1]);
    // console.log(this.entradas[2]);
    // console.log(this.entradas[3]);
    // console.log(this.entradas[4]);
    // console.log(this.entradas[5]);
  }

  

}

