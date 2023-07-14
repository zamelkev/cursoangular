import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Las clases proporcionan un mecanismo para definir objetos con propiedades y métodos relacionados. En Angular se utilizan principalmente para crear componentes, servicios y modelos de datos. */
export class AppComponent {
  title = 'clases';
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
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`); //el uso de ${} dentro de las comillas invertidas nos permite insertar expresiones JavaScript dentro de un string
  }
}

const persona1 = new Persona("Juan", 25);
persona1.saludar(); // Salida: "Hola, soy Juan y tengo 25 años."

const persona2 = new Persona("Paco", 29);
persona2.saludar(); // Salida: "Hola, soy Paco y tengo 29 años."

const persona3 = new Persona("Alba", 35);
persona3.saludar(); // Salida: "Hola, soy Alba y tengo 35 años."
//EJEMPLO 2

class Circulo {
  radio: number;

  constructor(radio: number) {
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }

  calcularCircunferencia() {
    return 2 * Math.PI * this.radio;
  }
}

const circulo1 = new Circulo(5);
console.log(circulo1.calcularArea()); // Salida: 78.53981633974483
console.log(circulo1.calcularCircunferencia()); // Salida: 31.41592653589793

const circulo2 = new Circulo(10);
console.log(circulo2.calcularArea()); // Salida: 314.1592653589793
console.log(circulo2.calcularCircunferencia()); // Salida: 62.83185307179586


//EJEMPLO HERENCIA

class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  emitirSonido() {
    console.log("El animal emite un sonido.");
  }
}

class Perro extends Animal {
  raza: string;
  
  constructor(nombre: string, raza: string) {
    super(nombre);
    this.raza = raza;
  }

  override emitirSonido() {
    console.log("El perro ladra.");
  } //En TypeScript, para indicar que un método de una subclase sobrescribe un método de la clase base, se utiliza la palabra clave override.

  

  mostrarDetalles() {
    console.log(`Nombre: ${this.nombre}, Raza: ${this.raza}`);
  }
}

const miPerro = new Perro("Firulais", "Labrador");
miPerro.emitirSonido(); // Salida: "El perro ladra."
miPerro.mostrarDetalles(); // Salida: "Nombre: Firulais, Raza: Labrador"


//EJEMPLO POLIMORFISMO

class Coche {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }

  acelerar() {
    console.log("El coche acelera.");
  }

  frenar() {
    console.log("El coche frena.");
  }
}

class BMW extends Coche {
  override acelerar() {
    console.log("El BMW acelera rápidamente.");
  }

  override frenar() {
    console.log("El BMW frena con potencia.");
  }
}

class Audi extends Coche {
  override acelerar() {
    console.log("El Audi acelera suavemente.");
  }
//En TypeScript, la palabra clave override se utiliza para indicar que estás sobrescribiendo un método de la clase base en una subclase.
  override frenar() {
    console.log("El Audi frena de manera eficiente.");
  }
}

// Crear instancias de diferentes marcas de coches
const coche1: Coche = new Coche("Genérico");
const coche2: Coche = new BMW("BMW");
const coche3: Coche = new Audi("Audi");

// Llamar a los métodos acelerar() y frenar() en las instancias
coche1.acelerar(); // Salida: "El coche acelera."
coche1.frenar(); // Salida: "El coche frena."

coche2.acelerar(); // Salida: "El BMW acelera rápidamente."
coche2.frenar(); // Salida: "El BMW frena con potencia."

coche3.acelerar(); // Salida: "El Audi acelera suavemente."
coche3.frenar(); // Salida: "El Audi frena de manera eficiente."


/* Encapsulación: Las clases permiten encapsular datos y comportamiento relacionado dentro de un objeto. Puedes definir propiedades y métodos en una clase y controlar su visibilidad mediante los modificadores de acceso (private, public, protected).

Reutilización de código: Las clases en Angular fomentan la reutilización de código. Puedes crear una clase base y luego derivar subclases de ella para agregar o modificar su funcionalidad. Esto te permite compartir código común entre varias clases y evitar la duplicación de código.

Herencia: Las clases en Angular admiten la herencia, lo que significa que puedes crear jerarquías de clases donde las subclases heredan propiedades y métodos de las superclases. Esto te permite extender y especializar el comportamiento de una clase base en sus subclases.

Polimorfismo: El polimorfismo es otra característica importante de las clases en Angular. Permite que objetos de diferentes clases se comporten de manera similar en función de una interfaz o clase base común. Esto simplifica la escritura de código y mejora la flexibilidad. */