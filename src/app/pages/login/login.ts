import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  correo:string = '';
  password:string = '';

  constructor(private router:Router){}

  iniciarSesion(){

   
    const correoAdmin = 'nilvercor@gmail.com';
    const passwordAdmin = '123456';

   
    if(this.correo === correoAdmin && this.password === passwordAdmin){

     
      if(typeof window !== 'undefined'){

        localStorage.setItem('usuario', this.correo);

      }

      alert('Bienvenido a AntojApp');

      this.router.navigate(['/']);

    }else{alert('Correo o contraseña incorrectos');}

  }

}
