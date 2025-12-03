import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  urlBase = "https://laravue2.blumbit.net/back/public/api/v1/auth/login"

  http = inject(HttpClient);

  funConectarConBackendLogin(credenciales: any){
    return this.http.post(`${this.urlBase}`, credenciales);
  }
}
