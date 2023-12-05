import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-rooms',
  templateUrl: './create-rooms.component.html',
  styleUrls: ['./create-rooms.component.css']
})

export class CreateRoomsComponent {

  isSidePanalOpen: boolean = true;
  clientArray: any[] = [];

  clientObj: any = {
    "roomId": 0,
    "roomName": "",
    "roomLocation": "",
    "clientName":"",
    "roomSeatingCapacity": "",
    "isRoomActive": false,
    "clientId": 0,
    "createdDate": new Date(),
    "lastUpdatetd": new Date()
  }

  roomArray: any[] = [];

  constructor(private http: HttpClient) {
    const userData = localStorage.getItem("logUserName");
    if (userData != null) {
      const userParseData = JSON.parse(userData);
      this.clientObj.clientId = userParseData.clientId
      this.getAllRoomByClientId()
    }
  }

  getAllRoomByClientId() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllRoomsByClientId?id=" + this.clientObj.clientId).subscribe((result: any) => {
      this.roomArray = result.data;
    })
  }

  onSaveRoom() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/CreateRoom", this.clientObj).subscribe((result: any) => {

      if (result.result) {
        alert(result.message)
        this.getAllRoomByClientId()
      } else {
        (result.message)
      }
    })
  }

  onUpdateClient() {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/UpdateRoom", this.clientObj).subscribe((result: any) => {

      if (result.result) {
        alert(result.message)
        this.getAllRoomByClientId()
      } else {
        (result.message)
      }
    })
  }

  onEdite(obj: any) {
    this.clientObj = obj;
  }

  onDelete(id: number) {
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/DeleteRoomById?id=" + id, {}).subscribe((result: any) => {

      if (result.result) {
        alert(result.message)
        this.getAllRoomByClientId()
      } else {
        (result.message)
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
      "roomId": 0,
      "roomName": "",
      "roomLocation": "",
      "roomSeatingCapacity": "",
      "isRoomActive": false,
      "clientId": 0,
      "createdDate": new Date(),
      "lastUpdatetd": new Date()
    }
  }
}

