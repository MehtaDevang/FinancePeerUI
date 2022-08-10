import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  validationUrl = environment.BASEURL + "/app/validate/$"
  constructor(private httpclient: HttpClient) { }

  validateJson(file:File, username:string, file_name:string){
    const formdata = new FormData();
    console.log(file);
    console.log(username)
    formdata.set("file", file, file.name);
    formdata.set("username", username);

    // let headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
    // });
    // let headers = {
    //   "Content-Type": "application/json"
    // }
  // let options = { headers: headers };
    return this.httpclient.post<any>(this.validationUrl, formdata);
  }
}
