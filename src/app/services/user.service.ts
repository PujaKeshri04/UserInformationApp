import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "../models/userInfo";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class UserService{
    constructor(private http: HttpClient){

    }

    public getUserInfo () : Observable<UserInfo[]>{
        let url ="https://jsonplaceholder.typicode.com/users";
        return this.http.get<UserInfo[]>(url);
      }
}