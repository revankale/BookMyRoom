import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAdminDashboardComponent } from './pages/ClientAdmin/client-admin-dashboard/client-admin-dashboard.component';
import { ClientAdminLayoutComponent } from './pages/ClientAdmin/client-admin-layout/client-admin-layout.component';
import { CreateRoomsComponent } from './pages/ClientAdmin/create-rooms/create-rooms.component';
import { CreateUsersComponent } from './pages/ClientAdmin/create-users/create-users.component';
import { BookRoomComponent } from './pages/ClientUser/book-room/book-room.component';
import { ClientUserDashboardComponent } from './pages/ClientUser/client-user-dashboard/client-user-dashboard.component';
import { ClientUserLayoutComponent } from './pages/ClientUser/client-user-layout/client-user-layout.component';
import { LoginComponent } from './pages/LoginPage/login/login.component';
import { ActivePackagesComponent } from './pages/SuperAdmin/active-packages/active-packages.component';
import { CreatClientComponent } from './pages/SuperAdmin/create-client/creat-client.component';
import { CreatePackagesComponent } from './pages/SuperAdmin/create-packages/create-packages.component';
import { SuperAdminDashboardComponent } from './pages/SuperAdmin/super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminLayoutComponent } from './pages/SuperAdmin/super-admin-layout/super-admin-layout.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateUsersForClientComponent } from './pages/SuperAdmin/create-users-for-client/create-users-for-client.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientAdminDashboardComponent,
    ClientAdminLayoutComponent,
    CreateRoomsComponent,
    CreateUsersComponent,
    BookRoomComponent,
    ClientUserDashboardComponent,
    ClientUserLayoutComponent,
    LoginComponent,
    ActivePackagesComponent,
    CreatClientComponent,
    CreatePackagesComponent,
    SuperAdminDashboardComponent,
    SuperAdminLayoutComponent,
    CreateUsersForClientComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
