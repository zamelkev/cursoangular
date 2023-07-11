import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Directivas';

  valores : any[] = [true, 5, false, "hola", "adios", 2];

  resultado:boolean = this.valores[3] > this.valores[4];

  combinadostrue:boolean = this.valores[0] || this.valores[2];

  combinadosfalse:boolean = this.valores[0] == this.valores[2];

  combinadosfalse1:boolean = this.valores[0] && this.valores[2];

  suma:any = this.valores[1] + this.valores[5];

  resta:any = this.valores[1] - this.valores[5];
  
  multiplicacion:any = this.valores[1] * this.valores[5];

  division:any = this.valores[1] / this.valores[5];

  ngOnInit() {
      console.log (this.resultado);
      console.log (this.combinadostrue);
      console.log(this.combinadosfalse);
      console.log(this.combinadosfalse1);
      console.log(this.suma);
      console.log(this.resta);
      console.log(this.multiplicacion);
      console.log(this.division);

  }

}
