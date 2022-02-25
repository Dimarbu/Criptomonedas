import { Component, OnInit } from '@angular/core';
import { CriptocurrencyService } from 'src/app/infrastructure/services/criptocurrency.service';
import { Coin } from 'src/app/model/coin';
import { ResponseGetCoinsById } from 'src/app/model/response-get-coins-by-id';
import { COINS } from '../home/coin.json';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'simbolo', 'nombre', 'tasa', 'empty'];
  dataSource: any;
  coins: Coin[];
  listCoins: any;

  constructor(private criptoCurrency: CriptocurrencyService) {
    this.getCoinsById();
  }

  ngOnInit(): void {
  }

  getCoinsById() {
    this.criptoCurrency.getCoinsById(Number(localStorage.getItem('idRegion')))
      .subscribe(data => {
        this.dataSource = data
        this.listCoins = this.dataSource.coinAvailable;
      });
  }

}
