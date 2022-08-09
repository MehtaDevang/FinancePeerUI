import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = environment.BASEURL + "/app/login/$"
  constructor(private httpClient: HttpClient) { }

  login(username:string, password:string) {
    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    console.log("sending login request to backend...");
    return this.httpClient.post<any>(
      this.loginUrl, formdata
    )
  }
}
