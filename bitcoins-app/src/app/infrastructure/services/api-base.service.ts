import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  constructor(protected _http: HttpClient) {
  }

  public get(url: string, payload?: any) {
    return this._http.get(url, payload);
  }

  public post(url: string, payload: any) {
    return this._http.post(url, payload);
  }
  /* public post(url: string, payload: any) {
    return this._http.post(url, payload);
  } */
}
