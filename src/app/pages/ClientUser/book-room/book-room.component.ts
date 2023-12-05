
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent {

  timeArray: any[] = [];
  roomsArray: any[] = [];
  bookingArray: any[] = [];
  userDetails: any;

  bookingObj: any = {
    "bookingId": 0,
    "roomId": 0,
    "userId": 0,
    "roomName": "",
    "bookingDate": new Date(),
    "fromTime": new Date(),
    "toTime": new Date(),
    "createdDate": new Date(),
    "lastUpdated": new Date()
  }


  constructor(private http: HttpClient) {

    this.getTimeList();
    const local = localStorage.getItem('logUserName');
    if (local != null) {
      this.userDetails = JSON.parse(local);
      this.getRoomsList();
      this.bookingObj.userId = this.userDetails.userId
    }
  }
  ngOninit() {
    this.getRoomsList()
  }
  getTimeList() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetTimeList").subscribe((result: any) => {
      this.timeArray = result.data;
    });
  }

  getRoomsList() {
    debugger;
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllRoomsByClientId?id=" + this.userDetails.clientId).subscribe((result: any) => {
      this.roomsArray = result.data;
    });
  }
  getAllBooking() {
    this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllBookingsByClientId?clientId=").subscribe((result: any) => {
      this.bookingArray = result.data;
    });
  }
  openBooking() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "block";
    }
  }
  saveBooking() {
    this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/CreateBooking', this.bookingObj).subscribe((result: any) => {
      if (result.result) {
        alert('Booking Done');
      } else {
        alert(result.message);
      }
      this.getRoomsList();
    });
  }

  closeBooking() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "none";
    }
  }
}



