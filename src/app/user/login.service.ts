import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: string;
  constructor() { }

  login() {
    let login = new Promise((resolve, reject) => {
      setTimeout(() => { resolve('true') }, 2000);
    });

    return login;
  }

  logout() {
    let logout = new Promise((resolve, reject) => {
      setTimeout(()=> {resolve('true')}, 2000);
    });

    this.user = 'Nobody';
    return logout;
  }

  getUser() {
    let user = new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve('Rashmith'); 
       }, 1000);
    });

    return user;
  }
   
}
