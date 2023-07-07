import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'directivas';

  valores : any[]  = [true, 5, false, "hola", "adios", 2];

  //ejemploArray : tipodatos[] = [index0, index1, index2, index3, index4, index5..... n ]

  edad! : number //aserción de asignación definitiva
  variableArray : any[] = ["soy un string", 3, true]
  numero? : number | undefined //Diferentes formas de indicar que el tipo de dato es opcional (puede variar entre los definidos, y si solo se define uno, la segunda opción será siempre undefined)
  resultado : boolean = this.valores[3] > this.valores[4]
  combinadostrue: boolean = this.valores[0] || this.valores[2]
  combinadosfalse: boolean = this.valores[0] == this.valores[2]
  combinadosfalse1: boolean = this.valores[0] && this.valores[2]
  suma: number = this.valores[1] + this.valores[5]
  resta: number = this.valores[1] - this.valores[5]
  multiplicacion: number = this.valores[1] * this.valores[5]
  modulo: number = this.valores[1] % this.valores[5]
  division: number = this.valores[1] / this.valores[5]


  constructor(){
     /* se ejecuta cuando creasuna instancia de una clase.
    Es aquí, dentro del constructor, donde podemos aprovechar y decirle qué dependencias necesitamos cargar */
  }

  ngOnInit(){
 /* Utilizamos este método para poder ejecutar código cuando el componente carga por primera vez. Normalmente se usa el constructor para inicializar variables, y el ngOnInit para inicializar o ejecutar tareras que tienen que ver con Angular. Todo esto lo podemos poner directamente en el constructor y funcionaría de la misma manera, pero no está de más tener más separado el código para que sea más mantenible.*/
 console.log (this.resultado )
 console.log (this.combinadostrue )
 console.log (this.combinadosfalse )
 console.log (this.combinadosfalse1 )
 console.log (this.suma )
 console.log ( this.resta)
 console.log ( this.multiplicacion)
 console.log ( this.modulo)
 console.log ( this.division)
  }

}

/* 
hola
adios

z=23
y=22
x=21
.
.
.
.
a= 1*/



/* TIPOS DE DATOS EN JS Y EN TS 

TS tipado superconjunto de JS. Cuenta con un transpiler

 **Tipos de datos en JS
 - Number (enteros y decimales) Valor en formato binario de 64 bits de doble precision IEEE 754 --> Puede representar valores números entre (-253 y -1) y 253 y 1.
 - BigInt (valores númericos que son demasiado grades)
 - String  (cadenas de caracteres)
 - Booleano(true o false)
 - Null    (representa el valor null, no tiene tipo ni contenido)
 - Undefined   (valor indefinido sin contenido asociado a una variable )
 - Symbol (valor primitivo único e inmutable)
 - Void (indicar la falta de valor en una variable -- Solo tiene dos valores: null o undefined)
 - Any (comodín)
 - Object (objetos literales y referencias al heap)
 - Function (forma abreviada para funciones)


 ** Tipos de Datos en Typescript
.- Number (enteros y decimales)
.- Array<tipo> (matriz homogénea del mismo tipo)
- Tuple [type1, type2,... ] (tupla heterogena de tipos dist
- Enumeraciones (tipos definidos por nosotros)
.- Void (indicar la falta de valor en una variable -- Solo tiene dos valores: null o undefined)
- Never (tipo utilizado cuando se lanza una excepción)
- Type Alias (nombre corto para los tipos más complejos)
.- Any (comodín)
.- String  (cadenas de caracteres)
.- Booleano(true o false)

*/


/* OPERADORES EN JS 

*** 1- Asignación

Guardamos un valor específico en una variable. El símbolo más utilizado es = (no confundir con == ===)

var numero = 3.89
var nombre = "juanita"

*** 2- Incremento y decremento

Válidos para variables núméricas. Incrementan o decrementa en 1 unidad el valor de la variable.
Los símbolos que se utilizan son ++ o --

· Como prefijos - Su valor se incrementa antes de realizar cualquier otra operación

++numero
console.log(numero) --> numero = 4.89

--numero
console.log(numero) --> numero = 2.89

· Como sufijos - Su valor se incrementa después de ejecutar la sentencia en la que aparece

var numero = 5
var numero2 = 2

numero3= numero++ + numero2
console.log(numero3, numero) --> numero3 = 7 ; numero = 6

numero--
console.log(numero) --> numero = 2.89

*** Lógicos

· Negación : símbolo ! PREFIJANDO a la variable. Se utiliza para obtener el valor contrario al valor original de la variable. Si lo añadimos como sufijo estaremos indicando una aserción de asignación definitiva.

· Operación lógica AND: Obtiene un resultado combinando dos valores booleanos. Su símbolo &&.

var valor0 = true
var valor1 = false
resultado = varlor0 && valor1 --> Me arroja el resultado false

  --> A la hora de combinar dos valores booleanos, el resultado va a ser true únicamente si los dos valores son true:
   true && true = true
   true && false = false
   false && true = false
   false && false = false

· Operador OR: También combina dos valores booleanos. Su símbolo ||

var valor0 = true
var valor1 = false
resultado = varlor0 || valor1 --> Me arroja el resultado true

  --> A la hora de combinar dos valores booleanos, el resultado va a ser true si alguno de los dos valores intrínsecos en la operación es true:
   true || true = true
   true || false = true
   false || true = true
   false || false = false

*** Matemáticos 

Se aplican a variables númericas para realizar operaciones matemáticas
· Suma: +
· Resta: -
· Multiplicación: *
· División: / (dividiendo/ divisor). Si el dividendo o el divisor es cero, devuelve NaN ("Not A Number")
· Exponente: **
· Modulo: % (dividido por el módulo del segundo número)
      numero1 = 10
      numero2 = 5
      modulo_resto = numero1%numero2 --> resultado 0

      numero1 = 12
      numero2 = 5
      modulo_resto = numero1%numero2 --> resultado 2
  
Los operadores matemáticos se pueden conbimar con el de asignación para abreviar su notación:

var numero1 = 5

numero1 += 3: (numero1 = numero1 + 3)  resultado 8
numero1 -= 3; (numero1 = numero1 - 3)  resultado 2
numero1 *= 3; (numero1 = numero1 * 3)  resultado 15
numero1 /= 3; (numero1 = numero1 / 3)  resultado 1
numero1 %= 3; (numero1 = numero1 % 3)  resultado 2

*** Relacionales

Son definidos igual que en las operaciones matemáticas:

· mayor que: >
· menor que: <
· mayor o igual que: >=
· menor o igual que: <=
· igualdad: ==
· desigualdad/distinto de:!=

Con estos operadores podemos comparar valores y determinar si una expresion es verdadera o falsa.

numero1 = 5
numero2 = 5
resultado = numero1 >= numero2 ; resultado = true
resultado = numero1 <= numero2 ; resultado = true
resultado = numero1 == numero2 ; resultado = true
resultado = numero1 != numero2 ; resultado = false

--> OJO: Cuando utilizo > o < para comparar dos cadenas de caracteres, se va a seguir un razonamiento intuitivo: 

nombre1 = "ana"
nombre2 = "alba"
resultado = nombre1 == nombre2; false
resultado = nombre1 > nombre2; true

 -- Las minúsculas se consideran mayores que las mayúsculas
 -- Los números son más grandes que letras
 -- El valor de las letras del abecedario se decrementa desde la z hacia la a









*/