import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../infrastructure/services/modalHome/switch.service';
import { CoinListComponent } from '../coin-list/coin-list.component';
import { COINS } from '../../components/home/coin.json';
import { CriptocurrencyService } from 'src/app/infrastructure/services/criptocurrency.service';
import { Coin } from 'src/app/model/coin';
import { RequestSaveCoinModal } from 'src/app/model/request-save-coin-modal';
import { Router } from '@angular/router';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  coins: any;
  dataSource: any;
  optionCoin: Coin;
  requestSaveCoin: RequestSaveCoinModal;

  constructor(private router: Router, private modalSS: SwitchService, private criptoCurrency: CriptocurrencyService) {
    this.getCoinsById();
    this.optionCoin = new Coin();
    this.requestSaveCoin = new RequestSaveCoinModal();
  }

  ngOnInit(): void {
  }

  getCoinsById() {
    this.criptoCurrency.getCoinsById(Number(localStorage.getItem('idRegion')))
      .subscribe(data => {
        this.dataSource = data
        this.coins = this.dataSource.coinAvailable;
        console.log(this.coins, 'datasource');
      });
  }

  saveCoinOfModal() {
    this.requestSaveCoin.idCripto = this.optionCoin.id;
    this.requestSaveCoin.idUser = Number(localStorage.getItem('id'));
    this.criptoCurrency.saveCoinOfModal(this.requestSaveCoin)
    .subscribe(data => {
      console.log(data);
      location.reload();
    });    
    this.closeModal();

  }

  closeModal() {
    this.modalSS.$modal.emit(false)
    console.log('Cerrar modal');

  }

}
