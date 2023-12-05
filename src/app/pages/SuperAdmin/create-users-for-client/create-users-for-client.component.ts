import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-create-users-for-client',
  templateUrl: './create-users-for-client.component.html',
  styleUrls: ['./create-users-for-client.component.css']
})
export class CreateUsersForClientComponent {

  isSidePanelOpen: boolean = false;
  clientArray: any[] = [];

  localData: any

  userObj: any = {
    "userId": 0,
    "clientId": 0,
    "userName": "",
    "userPassword": "",
    "createdDate": "2023-04-01T09:14:17.804Z",
    "lastUpdated": "2023-04-01T09:14:17.804Z",
    "isActive": false,
    "role": ""
  }

  usersArray: any[] = [];

  constructor(private http: HttpClient) {
    this.getClients()

    const local = localStorage.getItem("logUserName");
    if (local != null) {
      this.localData = JSON.parse(local);
    }
    if (this.localData.role == 'ClientAdmin') {
      this.getAllUserByClientId();
      this.userObj.clientId = this.localData.clientId;
    } else {
      this.getUsers();
    }
  }


  openSidePanel() {
    this.isSidePanelOpen = true;
  }
  closeSidePanel() {
    this.isSidePanelOpen = false
  }

  //  dropdown getclient api
  getClients() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllClients").subscribe((res: any) => {
      this.clientArray = res.data;
    })
  }

  getAllUserByClientId() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllUsersByClientId?id=" + this.localData.clientId).subscribe((res: any) => {
      this.usersArray = res.data;
    })
  }

  getUsers() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllusers").subscribe((res: any) => {
      this.usersArray = res.data
    })
  }

  onEdit(obj: any) {
    this.userObj = obj;
  }

  addusers() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/AddUsers", this.userObj).subscribe((res: any) => {
      if (this.localData.role == 'ClientAdmin') {
        this.getAllUserByClientId();
      } else {
        this.getUsers();
      }
    })
  }


  updateUsers() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/UpdateUser", this.userObj).subscribe((res: any) => {
      if (res.result) {
        alert('Update Success');
        this.getUsers();
      } else {
        alert(res.message)
      }
    })
  }

  deleteUsers(id: number) {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/DeleteUsersById?id=" + id, {}).subscribe((res: any) => {
      if (res.result) {
        alert('Delete Success');
        this.getUsers();
      } else {
        alert(res.message)
      }
    })
  }


  onReset() {
    this.userObj = {
      "userId": 0,
      "clientId": 0,
      "userName": "",
      "userPassword": "",
      "createdDate": "",
      "lastUpdated": "",
      "isActive": false,
      "role": ""
    }
  }



}
