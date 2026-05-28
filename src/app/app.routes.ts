import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Ofertas } from './pages/ofertas/ofertas';
import { Tienda } from './pages/tienda/tienda';
import { Contacto } from './pages/contacto/contacto';
import { MiCuenta } from './pages/mi-cuenta/mi-cuenta';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { NotFound } from './pages/not-found/not-found';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },

  {
    path: 'login',
    component: Login,
  },

  // RUTAS PROTEGIDAS

  {
    path: 'productos',
    component: Productos,
    canActivate: [authGuard],
  },

  {
    path: 'ofertas',
    component: Ofertas,
    canActivate: [authGuard],
  },

  {
    path: 'tienda',
    component: Tienda,
    canActivate: [authGuard],
  },

  {
    path: 'contacto',
    component: Contacto,
    canActivate: [authGuard],
  },

  {
    path: 'mi-cuenta',
    component: MiCuenta,
    canActivate: [authGuard],
  },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },

  {
    path: '**',
    component: NotFound,
  },
];
