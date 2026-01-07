import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  urlBase = environment.servidor;
  
  http = inject(HttpClient);

  listar(){
    return this.http.get(`${this.urlBase}/nota`);
  }

  guardar(datos: any){
    return this.http.post(`${this.urlBase}/nota`, datos);
  }

  mostrar(id: number){
    return this.http.get(`${this.urlBase}/nota/${id}`);
  }


  modificar(id: number, datos: any){
    return this.http.patch(`${this.urlBase}/nota/${id}`, datos);
  }
}
