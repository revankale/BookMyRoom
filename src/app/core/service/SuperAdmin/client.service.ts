// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminService {
//   apiUrl: string = "http://onlinetestapi.gerasim.in/api/Meeting/"


//   constructor(private http: HttpClient) {
//     this.getAllClients();
//   }
//   onEdit(id: any): Observable<any> {
//     return this.http.get<any>(this.apiUrl + "GetClientsById?id=" + id)
//   }

//   getAllClients(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl + "GetAllClients")
//   }

//   addClients(obj: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl + "AddClients", obj)
//   }

//   updateClients(obj: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl + "UpdateClients", obj)
//   }

//   DeleteClients(obj: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl + "DeleteClients", obj)
//   }

//   getAllUsers(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl + "GetAllusers")
//   }

//   addUsers(obj: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl + "AddUsers", obj)
//   }

//   updateUsers(obj: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl + "UpdateUser", obj)
//   }

//   // DeleteUsers(id: number): Observable<any> {
//   //   return this.http.post<any>(this.apiUrl + "DeleteUsersById?id=", +id)
//   // }

//   getAllPackages(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl + "GetAllPackages")
//   }

//   addPackages(obj: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl + "CreatePackage", obj)
//   }

//   updatePackage(obj: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl + "UpdatePackge", obj)
//   }

//   // DeletePackage(item:any):Observable<any>{
//   //   return this.http.post<any>(this.apiUrl+"DeletePackgeById?id=",+item)
//   // }
// }
