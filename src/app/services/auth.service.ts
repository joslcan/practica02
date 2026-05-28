import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(correo: string, password: string): boolean {
    if (correo === 'admin@antojapp.com' && password === '123456') {
      localStorage.setItem(
        'usuario',
        JSON.stringify({
          correo: correo,
        }),
      );

      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('usuario');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('usuario') !== null;
  }

  getUsuario() {
    return JSON.parse(localStorage.getItem('usuario') || '{}');
  }
}
