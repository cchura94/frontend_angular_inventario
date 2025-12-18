import { Component, inject, signal } from '@angular/core';
import { AlmacenService } from '../../../core/services/almacen.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-almacen.component',
  imports: [TableModule],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.scss',
})
export class AlmacenComponent {
  almacenes = signal<any>([])
  almacenService = inject(AlmacenService);
  visible = signal(false)
  id_sucursal = signal(-1);
  
  constructor(){
    this.funAlmacenes()
  }


  funAlmacenes(){
    this.almacenService.listar().subscribe(
      (res) => {
        this.almacenes.set(res);
      }
    )
  }
}
