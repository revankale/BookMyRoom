import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-layout',
  templateUrl: './super-admin-layout.component.html',
  styleUrls: ['./super-admin-layout.component.css']
})
export class SuperAdminLayoutComponent {

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
