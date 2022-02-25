import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriptocurrencyService {

  constructor(private apiBase: ApiBaseService) {
  }

  getCoinsById(id: number) {
    let url = environment.criptoUrl + `/coinsById/` + id;
    return this.apiBase.get(url);
  }

  getCoinsByIdUser(id: number) {
    let url = environment.criptoUrl + `/coinsByIdUser/` + id;
    return this.apiBase.get(url);
  }

  saveCoinOfModal(payload: any) {
    let url = environment.criptoUrl + `/saveCoin`;
    return this.apiBase.post(url, payload);
  }

  deleteCoin(id: number, idUser: number) {
    let url = environment.criptoUrl + `/deleteCoin/` + id + `&` + idUser;
    console.log(url, 'url');
    
    return this.apiBase.get(url);
  }
}
