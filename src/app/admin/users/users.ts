import { Component, inject, signal } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  userService = inject(UsersService);
  usuarios = signal<any>([]);

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(40)])
  });

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

  guardarUser(){
    const userData= {email: this.userForm.value.email || '', password: this.userForm.value.password || '', username: this.userForm.value.username || ''}
    this.userService.funGuardar(userData).subscribe(
      (res) => {
        this.listar()
      }
    )
  }

  funEditar(userData: any){
    const {id, ...rest} = userData;
    this.userForm.setValue(rest);
    // this.userForm.value.password;
    // this.userForm.value.username = userData.username
    // this.userForm.value.email = userData.email
    // this.userForm.value.password = userData.password
  }
}
