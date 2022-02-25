import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiBase: ApiBaseService) {
  }

  validLogin(payload: any) {
    let url = environment.loginUrl + `/validLogin`;
    return this.apiBase.post(url, payload);
  }

  tokenLogin(url: string, payload: any) {
    return this.apiBase.post(url, payload);
  }

}
