import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICoches } from './icoches.model';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  private coches: ICoches[] = [];
  private cocheParaEditar: BehaviorSubject<ICoches | null> = new BehaviorSubject<ICoches | null>(null); 
  
  constructor() { }

  cargarCochesIniciales() {
    this.coches = [
      { id: 1, marca:'Audi', modelo: 'Q7', year: 2017, km: 48000 },
      { id: 2,  marca:'BMW', modelo: '350 inventado', year: 2019, km: 45000 },
      { id: 3, marca:'San Yong', modelo: 'Korando', year: 2021, km: 40000 },
    ];
  }

  cargarCochesGuardados() {
    const cochesGuardados = localStorage.getItem('coches');
    if (cochesGuardados) {
      this.coches = JSON.parse(cochesGuardados);
    }
  }

  guardarCoche() {
    localStorage.setItem('coches', JSON.stringify(this.coches));
  }

  getCoche(): ICoches[] { 
    return this.coches;
  }

  agregarCoche(nuevoCoche: ICoches) { 
    const nuevoId = this.generarNuevoId(); 
    nuevoCoche.id = nuevoId; 
    this.coches.push(nuevoCoche); 
    this.guardarCoche(); 
  }



  eliminarCoche(id: number) { 
    const index = this.coches.findIndex(coche => coche.id === id); 
    if (index !== -1) { 
      this.coches.splice(index, 1); 
      this.guardarCoche(); 
    }
  }

  actualizarCoche(cocheActualizado: ICoches) { 
    const index = this.coches.findIndex(coche => coche.id === cocheActualizado.id); 
    if (index !== -1) { 
      this.coches[index] = cocheActualizado; 
      this.guardarCoche();
    }
  }

  getCocheParaEditar(): Observable<ICoches | null> {
    return this.cocheParaEditar.asObservable(); 
  }

  setCocheParaEditar(coche: ICoches | null) {
    this.cocheParaEditar.next(coche); 
  }

  limpiarCocheParaEditar() {
    this.cocheParaEditar.next(null); 
  }

  private generarNuevoId(): number {
    const ids = this.coches.map(coche => coche.id); 
    const maxId = Math.max(...ids); 
    return maxId + 1; 
  }
}
