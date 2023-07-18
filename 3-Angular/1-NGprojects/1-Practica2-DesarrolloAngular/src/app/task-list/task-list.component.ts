import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { ITareas } from '../itareas.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tareas: ITareas[] = [];

  constructor(private TareasService: TareasService) {}

  ngOnInit() {
    this.actualizarTareas();
  }
//4.1 Creamos métodos para eliminar y editar datos


//OBTENEMOS LOS DATOS
  actualizarTareas() {
    this.tareas = this.TareasService.getTareas();
  }
//ELIMINAMOS DATOS
  eliminarTarea(id: number) {
    this.TareasService.eliminarTarea(id);
    this.actualizarTareas();
  }
//EDITAMOS DATOS
  editarTarea(dato: ITareas) {
    this.TareasService.setTareaParaEditar(dato);
  }

}
