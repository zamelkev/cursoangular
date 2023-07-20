import { Component, Input } from '@angular/core';
import { Producto } from 'data.model';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  @Input() producto?: Producto;

  constructor() { }
}
