import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard {

  usuario:string | null = '';

  constructor(){

    this.usuario = localStorage.getItem('usuario');

  }

}
