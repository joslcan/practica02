import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  ofertas = [
    {
      nombre: 'Hamburguesa BBQ',
      precio: 35,
      descuento: 25,
      imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    },
    {
      nombre: 'Pizza Familiar',
      precio: 60,
      descuento: 45,
      imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    },
    {
      nombre: 'Sushi Rolls',
      precio: 50,
      descuento: 35,
      imagen: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    },
    {
      nombre: 'Pollo Broaster',
      precio: 40,
      descuento: 30,
      imagen: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58',
    },
  ];
}
