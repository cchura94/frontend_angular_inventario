import { Component, inject, signal } from '@angular/core';
import { Categoria } from '../../../core/services/categoria';

@Component({
  selector: 'app-categoria',
  imports: [],
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class CategoriaComponent {

  categorias = signal<any>([])
  categoriaService = inject(Categoria)

  constructor(){
    this.funListado()
  }

  funListado(){
    this.categoriaService.listarCategorias().subscribe(
      (res: any) => {
        this.categorias.set(res);
      }
    )
  }
}
