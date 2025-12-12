import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-producto.component',
  imports: [ToolbarModule, ButtonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent implements OnInit {

  // @ViewChild('dt') dt!: Table;

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  openNew(){

  }

  exportCSV(event: any) {
    // this.dt.exportCSV();
  }
}
