import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-user-layout',
  templateUrl: './client-user-layout.component.html',
  styleUrls: ['./client-user-layout.component.css']
})
export class ClientUserLayoutComponent {


  userName: string = "";

  constructor(private router: Router) {
    const name = localStorage.getItem("logUserData");
    if (name != null) {
      this.userName = name
    }
  }


  logOut() {
    localStorage.removeItem('logUserName');
    this.router.navigateByUrl('login');
  }
}
