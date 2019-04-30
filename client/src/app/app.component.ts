import { Component } from '@angular/core';
// import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  isLoggedIn = false

  // constructor(private swPush: SwPush) {
  constructor() {

    // if (this.swPush.isEnabled) {
    //   this.swPush.requestSubscription({
    //     serverPublicKey: "BN8y70PiBGqdNusT7de67a7fM9jbp1NlVdIwyZpMhE0kmB87t9la2Tn7gsDBfSWYn8i8nx8ozT54H0lsarMa4IE"
    //   })
    //     .then(subscription => {
    //       // send subscription to the server
    //       console.log("subscription", subscription);

    //     })
    //     .catch(console.error);
    // } else {
    //   console.log("swpush is not enabled")
    // }
  }


}
