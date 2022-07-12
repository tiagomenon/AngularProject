import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  authenticationState = new BehaviorSubject(localStorage.getItem("login")?true:false)
  constructor(private http : HttpClient) { }
  Login() {
    this.authenticationState.next(true);
    localStorage.setItem("login", "true")
  }
  isLogin() {
    return this.authenticationState
  }
  isLoginValue() { 
    return this.authenticationState.value
  }
  logOut() {
    this.authenticationState.next(false);
    localStorage.removeItem("login")
  }
}
