import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (typeof window !== 'undefined') {
    const usuario = localStorage.getItem('usuario');

    if (usuario) {
      return true;
    }
  }

  router.navigate(['/']);

  return false;
};
