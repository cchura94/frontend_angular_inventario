import { Component, inject, signal } from '@angular/core';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  userService = inject(UsersService);
  usuarios = signal<any>([]);

  constructor(){
    this.listar()
  }

  listar(){
    this.userService.funListar().subscribe(
      (res: any) => {
        this.usuarios.set(res.data);
      }
    )
  }
}
