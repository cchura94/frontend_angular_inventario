import { ChangeDetectorRef, Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import /*ConfirmationService, MessageService*/ 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { Ripple } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { TextareaModule } from 'primeng/textarea';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ProductoService } from '../../../core/services/producto.service';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-producto.component',
  imports: [
    TableModule,
    Dialog,
    Ripple,
    SelectModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialog,
    InputTextModule,
    TextareaModule,
    CommonModule,
    RadioButton,
    InputTextModule,
    InputNumber,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent {
  // @ViewChild('dt') dt!: Table;

  products = signal([]);
  product = signal<any>({});
  cols!: Column[];
  submitted= signal<boolean>(false);
  productDialog = signal<boolean>(false);
  @ViewChild('dt') dt!: Table;

  productoService = inject(ProductoService);

  constructor(
    // private messageService: MessageService,
    // private confirmationService: ConfirmationService,
    private cd: ChangeDetectorRef
  ) {

    this.funGetProductos();
  }

  funGetProductos(){
    this.productoService.funListar().subscribe(
      (res: any) => {
        console.log(res)
        this.products.set(res.data)
      }
    )
  }

  hideDialog() {
      this.productDialog.set(false);
      this.submitted.set(false);
  }

  openNew() {
    this.product.set({});
    this.submitted.set(false);
    this.productDialog.set(true);
}

  exportCSV(event: any) {
    // this.dt.exportCSV();
  }

  editProduct(product: any) {
    this.product = { ...product };
    this.productDialog.set(true);
  }

  deleteProduct(product: any) {
    /*
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'No',
        severity: 'secondary',
        variant: 'text',
      },
      acceptButtonProps: {
        severity: 'danger',
        label: 'Yes',
      },
      accept: () => {
        this.products.set(this.products().filter((val: any) => val.id !== product.id));
        this.product.set({});
        
          this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Producto Eliminado',
              life: 3000
          });
          
      },
    });
    */
  }

  saveProduct() {
    this.submitted.set(true);

    if (this.product.name?.trim()) {
        if (this.product().id) {
            
        } else {
           
        }

        this.products.set([...this.products()]);
        this.productDialog.set(false);
        this.product.set({});
    }
}

}
