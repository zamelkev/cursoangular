import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICoches } from '../icoches.model';
import { CochesService } from '../coches.service';

@Component({
  selector: 'app-coches-form',
  templateUrl: './coches-form.component.html',
  styleUrls: ['./coches-form.component.css'],
})
export class CochesFormComponent {
  nuevoCoche: ICoches = {
    id: 0,
    modelo: '',
    marca: '',
    year: 0,
    km: 0,
  };

  constructor(private CochesService: CochesService) {}

  ngOnInit() {
    this.CochesService.getCocheParaEditar().subscribe(
      (nuevoCoche: ICoches | null) => {
        if (nuevoCoche) {
          this.nuevoCoche = nuevoCoche;
        }
      }
    );
  }

  agregarOActualizarCoche(CochesForm: NgForm) {
    if (CochesForm.valid) {
      if (this.nuevoCoche.id === 0) {
        this.CochesService.agregarCoche(this.nuevoCoche);
      } else {
        this.CochesService.actualizarCoche(this.nuevoCoche);
      }
      this.limpiarFormulario(CochesForm);
    }
  }

  limpiarFormulario(CochesForm: NgForm) {
    this.nuevoCoche = {
      id: 0,
      modelo: '',
      marca: '',
      year: 0,
      km: 0,
    };
    CochesForm.resetForm();
    this.CochesService.limpiarCocheParaEditar();
  }
}
