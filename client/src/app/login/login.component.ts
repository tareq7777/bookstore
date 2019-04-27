import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed = false
  username = "user1"
  password = "123"

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  submit() {
    console.log("ok")
    console.log(this.username)
    console.log(this.password)

    // this.loginFailed = true
    this.authService.login(this.username, this.password)
  }
}
