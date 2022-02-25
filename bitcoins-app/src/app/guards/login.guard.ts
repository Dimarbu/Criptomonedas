import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiBaseService } from '../infrastructure/services/api-base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private apiBase: ApiBaseService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tokenObject = localStorage.getItem('token');
    if (!tokenObject) {
      return this.router.navigate(['/login'])
        .then(() => false);
    } else {
      let headers = new HttpHeaders()
        .set('access-token', tokenObject);
      this.apiBase.get(`${environment.main}/home`, { headers })
        .subscribe((res: any) => {
          if (res && res.hasOwnProperty('mensaje')) {
            localStorage.removeItem('token');
            return this.router.navigate(['/login'])
              .then(() => false);
          }
          return res;
        });
    }

    return true;
  }

}
