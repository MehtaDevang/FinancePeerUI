import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  getFiles = environment.BASEURL + "/app/getFiles/$";
  getFileData = environment.BASEURL + "/app/getFileData/$";

  constructor(private httpClient: HttpClient) { }

  fetchFiles(username:any){
    // console.log("again", username);
    let params = new HttpParams();
    params = params.set("username", username);
    // console.log(params);
    return this.httpClient.get<any>(
      this.getFiles, {params}
    );
  }

  fetchFileData(username:string,file_name:string){
    let params = new HttpParams()
    params = params.set("username", username);
    params = params.set("file_name", file_name);

    return this.httpClient.get<any>(
      this.getFileData, {params}
    )
  }
}
