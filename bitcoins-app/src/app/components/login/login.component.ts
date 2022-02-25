import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/infrastructure/services/login.service';
import { RequestValidLogin } from 'src/app/model/request-valid-login';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userCredentials: User;
  requestValidLogin: RequestValidLogin = new RequestValidLogin;
  responseValidUser: any;
  messages: any[] = [];
  token: any = '';

  headers = new HttpHeaders()
    .set('access-token', this.token);


  constructor(private router: Router,
    private loginService: LoginService) {
    this.userCredentials = new User();
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.userCredentials.username == null || this.userCredentials.password == null) {
      alert('Error Login');
      return;
    }

    this.getValidLogin(this.userCredentials.username, this.userCredentials.password)

  }

  getValidLogin(username: string, password: string) {
    this.requestValidLogin.username = username;
    this.requestValidLogin.password = password;


    this.responseValidUser = this.loginService.validLogin(this.requestValidLogin)
      .subscribe(data => {
        this.responseValidUser = data;
        if (this.responseValidUser.user.length != 0) {
          localStorage.setItem('id', this.responseValidUser.user[0].id);
          localStorage.setItem('idRegion', this.responseValidUser.user[0].id_region);
          alert('Ingreso Exitoso.');
          /* this.router.navigate(['/home']); */
        } else {
          alert('Ups. Usurio y contraseña incorrectos');
          localStorage.removeItem('id');
          localStorage.clear();
        }
      });
  }

  saveToken() {
    /*  this.requestValidLogin.username = username;
     this.requestValidLogin.password = password; */
    this.loginService.tokenLogin(environment.auth, { 'user': this.requestValidLogin.username, 'pass': this.requestValidLogin.password })
      .subscribe((res: any) => {
        console.log(res, 'soy res');
        if (res.hasOwnProperty('token')) {
          localStorage.setItem('token', res.token);
          if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            this.router.navigate(['/home']);
          }
          
        }


      })
  }

}
