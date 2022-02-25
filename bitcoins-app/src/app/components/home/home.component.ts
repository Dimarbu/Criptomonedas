import { Component, OnInit } from '@angular/core';
import { Coin } from '../../model/coin';
import { HomeService } from '../../infrastructure/services/home.service';
import { SwitchService } from '../../infrastructure/services/modalHome/switch.service';
import { COINS } from './coin.json';
import { CriptocurrencyService } from 'src/app/infrastructure/services/criptocurrency.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'simbolo', 'nombre', 'tasa', 'empty'];
  dataSource: any;
  listCoins: any;

  modalSwitch: boolean;

  constructor(private homeService: HomeService, private modalSS: SwitchService,
    private criptoCurrency: CriptocurrencyService) {
    this.getCoinsByIdUser();

  }

  ngOnInit(): void {
    this.modalSS.$modal
      .subscribe((valor) => this.modalSwitch = valor);
  }

  openModal() {
    this.modalSwitch = true;
  }

  getCoinsByIdUser() {
    this.criptoCurrency.getCoinsByIdUser(Number(localStorage.getItem('id')))
      .subscribe(data => {
        this.dataSource = data
        this.listCoins = this.dataSource.coinAvailable;
      });
  }

  deleteCoin(element: any) {
    this.criptoCurrency.deleteCoin(element.id, Number(localStorage.getItem('id')))
      .subscribe(data => {
        location.reload();
        console.log(data);
        
      })

  }

}
