import { Component, OnInit } from '@angular/core';
import { Coin } from '../model/coin';
import { HomeService } from '../infrastructure/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coins: Coin[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getCoins().subscribe(
      coins => this.coins = coins
    );
  }

}
