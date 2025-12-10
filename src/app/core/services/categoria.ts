import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Categoria {

    urlBase = environment.servidor;
  
  http = inject(HttpClient);

  listarCategorias(){
    return this.http.get(`${this.urlBase}/categoria`);
  }

}
