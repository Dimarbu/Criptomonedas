import { Component, OnInit } from '@angular/core';
import { Coin } from '../../model/coin';
import { HomeService } from '../../infrastructure/services/home.service';
import { SwitchService } from '../../infrastructure/services/modalHome/switch.service';
import { COINS } from './coin.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'simbolo', 'nombre', 'tasa', 'empty'];  
  dataSource = COINS;
  coins: Coin[];

  modalSwitch: boolean;

  constructor(private homeService: HomeService, private modalSS: SwitchService) { }


  ngOnInit(): void {
    this.homeService.getCoins()
      .subscribe(coins => this.coins = coins);
    this.modalSS.$modal
      .subscribe((valor) => this.modalSwitch = valor);
  }

  openModal() {
    this.modalSwitch = true;
    console.log('Abrir Modal');
  }

}
