import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-create-packages',
  templateUrl: './create-packages.component.html',
  styleUrls: ['./create-packages.component.css']
})

export class CreatePackagesComponent {
  list: boolean = true;
  grid: boolean = false;
  packageArray: any[] = []
  isSidePanelOpen = false;
  isApiCallInProgress: boolean = false

  packageObj: any = {
    "packageId": 0,
    "packageName": "",
    "packageCost": "",
    "packageDescription": "",
    "isPackageActive": false

  }

  constructor(private http: HttpClient) {
    this.getAllPackages()
  }

  // toggleView() {
  //   if (this.grid == true) { }
  // }

  listView() {
    this.list = true;
    this.grid = false;
  }
  gridView() {
    this.list = false;
    this.grid = true;
  }

  openSidePanel() {
    this.isSidePanelOpen = true;
  }
  closeSidePanel() {
    this.isSidePanelOpen = false
  }

  getAllPackages() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages").subscribe((res: any) => {
      this.packageArray = res.data
    })
  }

  onEdit(obj: any) {
    this.openSidePanel();
    this.packageObj = obj;
  }
  // onDelete() { }

  addPackages() {
    if(this.isApiCallInProgress == false) {
      this.isApiCallInProgress = true;
      this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/CreatePackage", this.packageObj).subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
          this.getAllPackages();
        } else {
          alert(res.message)
        }
        this.isApiCallInProgress = false;
      })

    }

  }

  updatePackages() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/UpdatePackge", this.packageObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
        this.getAllPackages();
      } else {
        alert(res.message)
      }
    })
  }
  // this.packageObj
  deletePackages(id: number) {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/DeletePackgeById?id=" + id, {}).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
        this.getAllPackages();
      } else {
        alert(res.message)
      }
    })
  }


  onReset() {
    this.packageObj = {
      "packageId": 0,
      "packageName": "",
      "packageCost": "",
      "packageDescription": "",
      "isPackageActive": false
    }
  }
}
