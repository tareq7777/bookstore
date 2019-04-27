import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed = false
  username
  password

  constructor() { }

  ngOnInit() {
  }

  submit() {
    // this.loginFailed = true

    console.log("ok")
    console.log(this.username)
    console.log(this.password)
  }
}
