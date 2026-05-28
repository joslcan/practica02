import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, UpperCasePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, DatePipe, UpperCasePipe, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  fecha: Date = new Date();

  precioPromo: number = 150;

  alias: string = 'antojapp';

  enviarMensaje() {
    alert('Mensaje enviado correctamente');

    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}
