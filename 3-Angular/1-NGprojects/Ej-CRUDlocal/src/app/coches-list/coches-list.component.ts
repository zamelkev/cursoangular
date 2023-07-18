import { Component, OnInit } from '@angular/core';
import { CochesService } from '../coches.service';
import { ICoches } from '../icoches.model';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.css']
})
export class CochesListComponent implements OnInit {

  coches: ICoches[] = [];

  constructor(private dataService: CochesService) {}

  ngOnInit() {
    this.actualizarCoche();
  }
//4.1 Creamos métodos para eliminar y editar coches


//OBTENEMOS LOS DATOS
  actualizarCoche() {
    this.coches = this.dataService.getCoche();
  }
//ELIMINAMOS DATOS
  eliminarCoche(id: number) {
    this.dataService.eliminarCoche(id);
    this.actualizarCoche();
  }
//EDITAMOS DATOS
  editarCoche(coche: ICoches) {
    this.dataService.setCocheParaEditar(coche);
  }

}
