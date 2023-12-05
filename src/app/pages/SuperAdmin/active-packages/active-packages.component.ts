
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-active-packages',
  templateUrl: './active-packages.component.html',
  styleUrls: ['./active-packages.component.css']
})
export class ActivePackagesComponent {
  clientpackArray: any[] = [];
  clientArray: any[] = [];
  userArray: any[] = [];
  packageArray: any[] = [];
  isSidePanelOPen: boolean = false;

  packageObj: any = {
    "clientPackageId": 0,
    "clientId": 0,
    "packageId": 0,
    "createdDate": new Date(),
    "lastUpdated": new Date(),
    "packageStartDate": new Date(),
    "packageEndDate": new Date(),
    "isActive": false
  }
  constructor(private http: HttpClient) {
    this.GetAllClientPAckages();
    this.getallclient();
    this.GetAllPackages();
  };

  getallclient() {
    this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetAllClients').subscribe((result: any) => {
      debugger;
      this.clientArray = result.data;
    })
  }

  GetAllPackages() {
    this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages').subscribe((result: any) => {
      this.clientpackArray = result.data;
    })
  }

  GetAllClientPAckages() {
    this.http.get('https://onlinetestapi.gerasim.in/api/Meeting/GetAllClientPackags').subscribe((result: any) => {
      this.packageArray = result.data;
    })
  }

  saveClient() {
    this.http.post('https://onlinetestapi.gerasim.in/api/Meeting/AddNewClientPackage', this.packageObj).subscribe((result: any) => {
      this.GetAllClientPAckages();
    })
  }

  UpdateClient() {
    this.http.post('https://onlinetestapi.gerasim.in/api/Meeting/UpdateClientPackage', this.packageObj).subscribe((result: any) => {
      this.GetAllClientPAckages();
    })
  }

  onEdit(id: any) {
    this.http.get('https://onlinetestapi.gerasim.in/api/Meeting/GetClientPackageById?id=' + id).subscribe((result: any) => {
      this.packageObj = result.data;
    })

  }

  onDelete(item: any) {
    this.http.post('https://onlinetestapi.gerasim.in/api/Meeting/DeleteClientPackageById?id=' + item, '').subscribe((result: any) => {
      this.GetAllClientPAckages();
    })
  }



  ShowSidePanel() {
    this.isSidePanelOPen = true;
  }

  closeSidePanel() {
    this.isSidePanelOPen = false;
  }





  onReset() {
    this.packageObj = {
      "clientPackageId": 0,
      "clientId": 0,
      "packageId": 0,
      "createdDate": new Date(),
      "lastUpdated": new Date(),
      "packageStartDate": new Date(),
      "packageEndDate": new Date(),
      "isActive": true
    };
  }
}
