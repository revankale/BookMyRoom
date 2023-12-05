import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-creat-client',
  templateUrl: './creat-client.component.html',
  styleUrls: ['./creat-client.component.css']
})
export class CreatClientComponent {

  client: any[] = [];

  clientObj: any = {
    "clientId": 0,
    "clientName": "",
    "companyName": "",
    "address": "",
    "city": "",
    "pinCode": "",
    "state": "",
    "employeeStrength": 0,
    "gstNo": "",
    "contactNo": ""
  }

  isSidePanalOpen: boolean = true;

  constructor(private http: HttpClient) {
    this.getAllClient();
  }

  getAllClient() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllClients").subscribe((result: any) => {
      this.client = result.data;
    });
  }


  onSaveClient() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/AddClients", this.clientObj).subscribe((result: any) => {
      this.getAllClient();
      alert("Client saved");


    })
  }

  onUpdateClient() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/UpdateClients", this.clientObj).subscribe((result: any) => {

      this.getAllClient();
      alert("Client Updated")

    })
  }



  onEdite(client: any) {
    this.clientObj = client;
  }

  onDelete(id: number) {
    debugger;
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/DeleteClients?id=" + id, {}).subscribe((res: any) => {
      this.getAllClient();
      debugger;
      if (res.result) {
        alert(res.message)
      } else {
        (res.message)
      }
    })
  }

  showSidePanal() {
    this.isSidePanalOpen = true;
  }

  closePanal() {
    this.isSidePanalOpen = false;
  }



  onReset() {
    this.clientObj = {
      "clientId": 0,
      "clientName": "",
      "companyName": "",
      "address": "",
      "city": "",
      "pinCode": "",
      "state": "",
      "employeeStrength": 0,
      "gstNo": "",
      "contactNo": ""
    }
  }
}

