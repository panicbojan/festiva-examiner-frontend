import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logInUrl='http://127.0.0.1:8000/api/login';

  constructor(private http:HttpClient, private router:Router) { }

  loggedIn(){
    return localStorage.getItem('token');
    //console.log(localStorage.getItem('token'));
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/dashboard']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
