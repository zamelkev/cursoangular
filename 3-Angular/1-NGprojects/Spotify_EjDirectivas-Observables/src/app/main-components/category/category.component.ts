import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//1º Importamos el módulo HttpClient

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categorias! : any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarCategorias();
  }

  cargarCategorias(){
    this.http.get<any>('../../assets/datos.json').subscribe(
      data => {
        this.categorias=data.categorias;
      })
  }



}
