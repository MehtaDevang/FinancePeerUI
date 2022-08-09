import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string = "";
  password : string = "";

  constructor(private service: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    if(sessionStorage.getItem("token")){
      this.router.navigate(["main"]);
    }
  }

  checkLogin(event:any){
    console.log(this.username, this.password);
    this.service.login(this.username, this.password).subscribe(data => {
      if(data.hasOwnProperty("error")){
        console.log("error block")
      }
      else{
        console.log("success block");
        console.log(data);
        sessionStorage.setItem("token", data["token"]);
        sessionStorage.setItem("username", data["username"]);
        this.router.navigate(["main"]);
      }
    });
  }
}
