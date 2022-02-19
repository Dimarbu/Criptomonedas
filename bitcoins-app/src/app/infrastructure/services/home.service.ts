import { Injectable } from '@angular/core';
import { COINS } from 'src/app/home/coin.json';
import { Coin } from 'src/app/model/coin';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getCoins(): Observable<Coin[]> {
    return of(COINS);
  }
}
