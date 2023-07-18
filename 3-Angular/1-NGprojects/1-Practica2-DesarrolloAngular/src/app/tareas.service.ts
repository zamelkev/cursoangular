import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITareas } from './itareas.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  public tareas: ITareas[] = [];
  public tareaParaEditar: BehaviorSubject<ITareas | null> = new BehaviorSubject<ITareas | null>(null); 
  public tareaSelecionada: BehaviorSubject<ITareas | null> = new BehaviorSubject<ITareas | null>(null);

  constructor(private http: HttpClient) {
    //2.2 Cargar los tareas iniciales y los tareas guardadas
    this.cargarTareasIniciales();
    this.cargarTareasGuardadas();
  }

  cargarTareasIniciales() {
    this.tareas = [
      { id: 0, nombre: 'Plantear Practica', descripcion: 'tarea a realizar', autor: 'Kevin', urgencia: 'alta', estado: 'realizada' },
      { id: 1, nombre: 'Acabar Practica', descripcion: 'tarea a realizar', autor: 'Kevin', urgencia: 'alta', estado: 'realizada' },
      { id: 2, nombre: 'Revisar que funcione', descripcion: 'tarea a realizar', autor: 'Kevin', urgencia: 'alta', estado: 'en proceso' },
      { id: 3, nombre: 'Subirla a Github', descripcion: 'tarea a realizar', autor: 'Kevin', urgencia: 'alta', estado: 'en proceso' },
      { id: 4, nombre: 'Adjuntarla en la plataforma de entrega', descripcion: 'tarea a realizar', autor: 'Kevin', urgencia: 'alta', estado: 'en proceso' },
    ];
  }

  cargarTareasGuardadas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }

  guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  getTareas(): ITareas[] { 
    return this.tareas;
  }

  agregarTarea(nuevoTarea: ITareas) { 
    const nuevoId = this.generarNuevoId(); 
    nuevoTarea.id = nuevoId; 
    this.tareas.push(nuevoTarea); 
    this.guardarTareas(); 
  }



  eliminarTarea(id: number) { 
    const index = this.tareas.findIndex(tarea => tarea.id === id); 
    if (index !== -1) { 
      this.tareas.splice(index, 1); 
      this.guardarTareas(); 
    }
  }

  actualizarTarea(tareaActualizada: ITareas) { 
    const index = this.tareas.findIndex(tarea => tarea.id === tareaActualizada.id); 
    if (index !== -1) { 
      this.tareas[index] = tareaActualizada; 
      this.guardarTareas();
    }
  }

  mostrarTarea(tareaSelecionada: ITareas) {
    const index = this.tareas.findIndex(tarea => tarea.id === tareaSelecionada.id); 
    if (index !== -1) { 
      this.tareas[index] = tareaSelecionada; 
      // Acabar
    }
  }

  getTareaParaEditar(): Observable<ITareas | null> {
    return this.tareaParaEditar.asObservable(); 
  }

  setTareaParaEditar(tarea: ITareas | null) {
    this.tareaParaEditar.next(tarea); 
  }

  limpiarTareaParaEditar() {
    this.tareaParaEditar.next(null); 
  }

  private generarNuevoId(): number {
    const ids = this.tareas.map(tarea => tarea.id); 
    const maxId = Math.max(...ids); 
    return maxId + 1; 
  }
  
}
