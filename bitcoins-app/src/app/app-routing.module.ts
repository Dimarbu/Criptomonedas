import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CoinListComponent } from './components/coin-list/coin-list.component';
/* import { LoginGuard } from './login.guard'; */


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  //canActivate: [LoginGuard]
  { path: 'login', component: LoginComponent },
  { path: 'coinList', component: CoinListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
