import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  mayor : string = 'mayor de edad'

  menor : string = 'menor de edad, no puedes acceder al site'

  edad : any;

  contraste : any = true

  condicion : any = false

  objeto : any = ['uno', 'dos', 'tres']

  constructor() { }

  ngOnInit(): void {
  }

}
