import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
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
import { CreateUsersForClientComponent } from './pages/SuperAdmin/create-users-for-client/create-users-for-client.component';

const routes: Routes = [

  {
    path: "",
    component: LoginComponent,
  },

  {
    path: "login",
    component: LoginComponent,
  },

  {
    path: "",
    component: SuperAdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "sAdminDashboard",
        component: SuperAdminDashboardComponent
      },
      {
        path: "createPackages",
        component: CreatePackagesComponent
      },
      {
        path: "creatUsersForClient",
        component: CreateUsersForClientComponent
      },
      {
        path: "activePackage",
        component: ActivePackagesComponent
      },
      {
        path: "createClient",
        component: CreatClientComponent
      }
    ]
  },


  {
    path: "",
    component: ClientAdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "cAdminDashboard",
        component: ClientAdminDashboardComponent
      },

      {
        path: "creatRooms",
        component: CreateRoomsComponent
      },
      {
        path: "Client-user",
        component: CreateUsersForClientComponent
      }

    ]
  },

  {
    path: "",
    component: ClientUserLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "cUserDashboard",
        component: ClientUserDashboardComponent
      },
      {
        path: "bookRoom",
        component: BookRoomComponent
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
