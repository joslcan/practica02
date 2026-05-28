import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css'
})
export class MiCuenta {

  usuario = {
    nombre: 'Nilver Coronado',
    correo: 'nilver@gmail.com',
    plan: 'Premium',
    fechaRegistro: new Date()
  };

  pedidos = [
    {
      producto: 'Hamburguesa BBQ',
      precio: 25
    },
    {
      producto: 'Pizza Familiar',
      precio: 45
    },
    {
      producto: 'Sushi Rolls',
      precio: 35
    }
  ];
}
