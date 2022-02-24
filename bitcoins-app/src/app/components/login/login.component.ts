import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userCredentials: User;  

  constructor( private router: Router) { 
    this.userCredentials = new User();
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.userCredentials);
    if (this.userCredentials.username == null ||  this.userCredentials.password == null) {
      alert('Error Login');
      return;
    }
    this.router.navigate(['/home']);
  }

}
