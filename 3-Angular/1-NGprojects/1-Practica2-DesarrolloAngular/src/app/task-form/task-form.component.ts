import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITareas } from '../itareas.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  nuevaTarea: ITareas = {
    id: 0,
    nombre: '',
    descripcion: '',
    autor: '',
    urgencia: '',
    estado: '',
  };

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.tareasService.getTareaParaEditar().subscribe((tarea: ITareas | null) => {
      if (tarea) {
        this.nuevaTarea = tarea;
      }
    });
  }

  agregarOActualizarTarea(tareasForm: NgForm) {
    if (tareasForm.valid) {
      if (this.nuevaTarea.id === 0) {
        this.tareasService.agregarTarea(this.nuevaTarea);
      } else {
        this.tareasService.actualizarTarea(this.nuevaTarea);
      }
      this.limpiarFormulario(tareasForm);
    }
  }

  mostrarDetalleTarea(tareasForm: NgForm) {
    if (tareasForm.valid) {
      if (this.nuevaTarea.id === 0) {
        "La tarea no existe."
      } else {
        // this.tareasService.;
      }
      this.limpiarFormulario(tareasForm);
    }
  }


  limpiarFormulario(tareasForm: NgForm) {
    this.nuevaTarea = {
      id: 0,
    nombre: '',
    descripcion: '',
    autor: '',
    urgencia: '',
    estado: '',
    };
    tareasForm.resetForm();
    this.tareasService.limpiarTareaParaEditar();
  }

}
