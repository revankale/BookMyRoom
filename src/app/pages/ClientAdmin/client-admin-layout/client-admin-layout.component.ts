import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-admin-layout',
  templateUrl: './client-admin-layout.component.html',
  styleUrls: ['./client-admin-layout.component.css']
})
export class ClientAdminLayoutComponent {

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
