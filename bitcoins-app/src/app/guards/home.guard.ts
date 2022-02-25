import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiBaseService } from '../infrastructure/services/api-base.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private apiBase: ApiBaseService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tokenObject = localStorage.getItem('token');
    if (tokenObject) {
      let headers = new HttpHeaders()
        .set('access-token', tokenObject);

      this.apiBase.get(`${environment.main}/home`, { headers })
        .subscribe((res: any) => {
          console.log(res, 'token');
          if (res && !res.hasOwnProperty('token')) {
            
            
            /* localStorage.removeItem('token'); */
            return this.router.navigate(['/coin-list'])
              .then(() => false);
          }
          return res;
        });

    }
    return true;

  }
}
