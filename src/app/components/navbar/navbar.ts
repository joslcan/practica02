import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {

  constructor(private router: Router) {}

  usuarioLogueado(): boolean {

    if (typeof window !== 'undefined') {

      return localStorage.getItem('usuario') !== null;

    }

    return false;
  }

  cerrarSesion() {

    localStorage.removeItem('usuario');

    alert('Sesión cerrada');

    this.router.navigate(['/']);

  }

}
