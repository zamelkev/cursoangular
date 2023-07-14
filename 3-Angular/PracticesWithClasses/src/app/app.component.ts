import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticesWithClasses';
}

//EJEMPLO 1
class Persona {
  nombre: string;
  edad: number;

  constructor( nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
  }
}

const persona1 = new Persona("Eneko", 21);
persona1.saludar();

const persona2 = new Persona("Ariel", 42);
persona2.saludar();

const persona3 = new Persona("Kevin", 26);
persona3.saludar();

//EJEMPLO 2
class Circulo {
  radio: number;

  constructor(radio: number) {
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }

  calcularCircumferencia() {
    return 2 * Math.PI * this.radio;
  }

}

console.log(`Cálculos Círculo con radio 5: Area y Circumferencia`);
const circulo1 = new Circulo(5);
console.log(circulo1.calcularArea());
console.log(circulo1.calcularCircumferencia());

console.log(`Cálculos Círculo con radio 25: Area y Circumferencia`);
const circulo2 = new Circulo(25);
console.log(circulo2.calcularArea());
console.log(circulo2.calcularCircumferencia());

console.log(`Cálculos Círculo con radio 50: Area y Circumferencia`);
const circulo3 = new Circulo(50);
console.log(circulo3.calcularArea());
console.log(circulo3.calcularCircumferencia());

// PUNTO EXTRA
class RaizCuadrada {
  numero: number;

  constructor(numero: number) {
    this.numero = numero;
  }

  calcularRaizCuadrada() {
    return Math.sqrt(this.numero);
  }

}

console.log(`La raiz cuadrada de 333 es:`)
const raiz1 = new RaizCuadrada(333);
console.log(raiz1.calcularRaizCuadrada());

console.log(`La raiz cuadrada de 333 es:`)
const raiz2 = new RaizCuadrada(99);
console.log(raiz2.calcularRaizCuadrada());

console.log(`La raiz cuadrada de 333 es:`)
const raiz3 = new RaizCuadrada(27);
console.log(raiz3.calcularRaizCuadrada());