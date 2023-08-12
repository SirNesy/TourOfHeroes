import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const heroDetailGuard: CanActivateFn = (route, state) => {
  // route: ActivatedRouteSnapshot
  // Router
  const router = Router;
  const id = Number(route.paramMap.get('id'));
  if (isNaN(id) || id < 1) {
    alert('Invalid product id');
    Router.navigate(['/products']);
    return false;
  }
  return true;
};

// TRYING TO IMPLEMENT THIS WITHOUT USING A CLASS. USING THE GIVEN BOILER PLATE
