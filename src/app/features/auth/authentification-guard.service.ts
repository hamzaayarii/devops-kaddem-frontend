import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuardService {

  constructor(private authService: AuthentificationService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean
      | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true
    }
    return this.router.createUrlTree(['/error']);

  }

}
