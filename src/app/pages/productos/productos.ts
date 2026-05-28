import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, UpperCasePipe, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})

export class Productos implements OnInit {

  productos:any[] = [];

  filtro:string = '';

  constructor(
    private productService: ProductService,
    private cd: ChangeDetectorRef
  ){}

  ngOnInit(): void {

    this.cargarProductos();

  }

  cargarProductos(){

    this.productService.getProductos().subscribe((data:any[]) => {

      this.productos = data;

      // Forzar refresco de vista
      this.cd.detectChanges();

    });

  }

}
