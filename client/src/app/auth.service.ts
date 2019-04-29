import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../config';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers

  isLoggedIn = false
  access_token
  username

  constructor(private http: HttpClient, private router: Router) {
    this.headers = this.getHeaders()
    
    var stored_token = localStorage.getItem("bookstore-token")
    if (stored_token) {
      this.access_token = stored_token
      this.username = localStorage.getItem("bookstore-username")
      this.isLoggedIn = true
    }
  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return headers
  }

  login(username, password) {
    this.http.post(url + "auth/login", { "username": username, "password": password }, { headers: this.headers }).subscribe((res: any) => {
      console.log(res)
      if (res.access_token) {
        this.isLoggedIn = true
        this.access_token = res.access_token
        this.username = username

        localStorage.setItem("bookstore-token", this.access_token)
        localStorage.setItem("bookstore-username", this.username)

        this.router.navigate(['/myauthor']);
      }

    })
  }
}
