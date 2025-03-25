import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/features/auth/authentification.service';


@Injectable({
  providedIn: 'root',
})
export class authentificationGuard implements CanActivate {
  constructor(private authService: AuthentificationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      // L'utilisateur a le rôle requis, accès autorisé
      return true;
    }
    // Sinon, déconnectez l'utilisateur et refusez l'accès

    return false;
  }
}
