import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { ITareas } from '../itareas.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  tareas: ITareas[] = [];
  @Input() tarea: any;
  
  constructor(private TareasService: TareasService) {}

  ngOnInit() {
    this.actualizarTareas();
  }


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
  editarTarea(tarea: ITareas) {
    this.TareasService.setTareaParaEditar(tarea);
  }

}
