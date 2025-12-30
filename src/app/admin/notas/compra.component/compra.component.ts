import { Component, inject, signal, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ProductoService } from '../../../core/services/producto.service';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}


@Component({
  selector: 'app-compra.component',
  imports: [TableModule, IconFieldModule, InputIconModule, FormsModule, ImageModule, ButtonModule, CommonModule, InputText, DialogModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.scss',
})
export class CompraComponent {

  carrito = signal<any>([]);
  products = signal([]);
  cols!: Column[];
  totalRecords = signal(0);
  @ViewChild('dt') dt!: Table;
  loading = signal(false);
  search = signal("");
  visibleCliente = signal(false);

  productoService = inject(ProductoService);



  cargarDatos(event: any){
    let page = event.first / event.rows + 1;

    this.funGetProductos(page, event.rows);
  }

  funGetProductos(page: number = 1, limit: number = 5) {
    this.loading.set(true)

    this.productoService.funListar(page, limit, this.search()).subscribe((res: any) => {
      console.log(res);
      this.products.set(res.data);
      this.totalRecords.set(res.total);

      this.loading.set(false)
    });
  }

  addCarrito(prod: any){
   this.carrito.set([...this.carrito(), { id_producto: prod.id ,nombre: prod.nombre, cantidad: 1, precio: prod.precio_venta_actual }]);
  }

  quitarCarrito(prod:any){
 
    const carritoActual = [...this.carrito()] // clonando
    const index = carritoActual.findIndex(
      item => item.id_producto === prod
    );


    if(index !== -1){
      carritoActual.splice(index, 1);
      this.carrito.set(carritoActual);
    }
  }

  showDialogCliente(){
    this.visibleCliente.set(true);
  }
}
