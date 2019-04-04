import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: string;
  isLoggedIn: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getUser().then((response: string) => {
      this.user = response;
    });
  }

  onLogin() {
    this.loginService.login().then((response: string) => {
      this.isLoggedIn = true;
    })

    this.loginService.getUser().then((response: string) => {
      this.user = response;
    })
  }

  onLogout() {
    this.loginService.logout().then(() => {
      this.isLoggedIn = false;
      this.user = this.loginService.user;
    })
  }
}
