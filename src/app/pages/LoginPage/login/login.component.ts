import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isApiCallProgress: boolean = false;
  loginObj: any = {
    "UserName": "",
    "UserPassword": ""
  }

  constructor(private http: HttpClient, private router: Router) {

  }
  onLogin() {

    if (this.isApiCallProgress == false) {
      this.isApiCallProgress = true;
      this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/login", this.loginObj).subscribe((result: any) => {
        debugger;

        if (result.result) {
          localStorage.setItem('logUserName', JSON.stringify(result.data));
          localStorage.setItem('logUserData', result.data.userName);
          debugger;
          if (result.data.role == "Admin") {
            this.router.navigateByUrl("sAdminDashboard");
          } else if (result.data.role == "ClientAdmin") {
            this.router.navigateByUrl("cAdminDashboard");
          } else if (result.data.role == "ClientUser") {
            this.router.navigateByUrl("cUserDashboard");
          }
        } else {
          alert(result.message);
        }
        this.isApiCallProgress = false;
      })
    }

  }
}

