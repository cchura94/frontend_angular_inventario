import { Component, inject, signal } from '@angular/core';
import { Categoria } from '../../../core/services/categoria';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-categoria',
  imports: [TableModule, ButtonModule, DialogModule],
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class CategoriaComponent {

  categorias = signal<any>([])
  categoriaService = inject(Categoria);
  visible = signal(false)

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

  showDialog(){
    this.visible.set(true);
  }
}
