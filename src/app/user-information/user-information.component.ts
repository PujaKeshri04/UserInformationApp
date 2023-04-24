import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../models/userInfo';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit{
  
  userInfo : UserInfo[] = [];
  constructor(
              private http: HttpClient,
              private userService: UserService
  ){}
  ngOnInit(): void {
    this.getUserInfo();
  }

  public getUserInfo (){
    this.userService.getUserInfo().subscribe(users => this.userInfo = users);
  }
   


}
