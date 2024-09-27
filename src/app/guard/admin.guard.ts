import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  // token ? true : false
  const router = inject(Router);

  const token = localStorage.getItem('token');
  if (!token) {
    // redriect login
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
