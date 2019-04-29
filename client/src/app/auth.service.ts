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

  constructor(private http: HttpClient, private router: Router) {
    this.headers = this.getHeaders()
  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return headers
  }

  login(username, password) {
    this.http.post(url + "users/login", { "username": username, "password": password }, { headers: this.headers }).subscribe((res: any) => {
      console.log(res)
      if (res.access_token) {
        this.isLoggedIn = true
        this.access_token = res.access_token
        this.router.navigate(['/']);
      }

    })
  }
}
