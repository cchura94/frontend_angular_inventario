import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteProveedorService {
  urlBase = environment.servidor;
  
  http = inject(HttpClient);

  listar(){
    return this.http.get(`${this.urlBase}/cliente-proveedor`);
  }

  guardar(datos: any){
    return this.http.post(`${this.urlBase}/cliente-proveedor`, datos);
  }

  mostrar(id: number){
    return this.http.get(`${this.urlBase}/cliente-proveedor/${id}`);
  }


  modificar(id: number, datos: any){
    return this.http.patch(`${this.urlBase}/cliente-proveedor/${id}`, datos);
  }
}
