import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda {
  categorias = [
    {
      nombre: 'Hamburguesas',
      imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    },
    {
      nombre: 'Pizzas',
      imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    },
    {
      nombre: 'Sushi',
      imagen: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    },
    {
      nombre: 'Postres',
      imagen: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
    },
  ];

  productos = [
    {
      nombre: 'Hamburguesa BBQ',
      precio: 25,
      stock: 10,
      imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    },
    {
      nombre: 'Pizza Familiar',
      precio: 45,
      stock: 8,
      imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    },
    {
      nombre: 'Sushi Rolls',
      precio: 35,
      stock: 6,
      imagen: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    },
    {
      nombre: 'Cheesecake',
      precio: 20,
      stock: 15,
      imagen: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
    },
  ];
}
