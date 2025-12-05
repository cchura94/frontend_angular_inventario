import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  urlBase = environment.servidor;
  // urlBase = "https://laravue2.blumbit.net/back/public/api"

  http = inject(HttpClient);

  funListar(){
    return this.http.get(`${this.urlBase}/users`);
  }

}
