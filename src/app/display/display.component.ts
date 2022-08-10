import { Component, OnInit } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  files:any = [];
  content:any = "";
  constructor(private service: DisplayService) { }

  ngOnInit(): void {
    let username = sessionStorage.getItem("username") || "";
    console.log("this is", username)
    this.service.fetchFiles(username).subscribe(data => {
      if(data.hasOwnProperty("error")){
        console.log("error block");
      }
      else{
        this.files = data["files"];
        console.log(this.files)
      }
    })
  }

  getData(event:any){
    let file_name = event.target.value;
    let username = sessionStorage.getItem('username') || "";
    this.service.fetchFileData(username, file_name).subscribe(data => {
      if(data.hasOwnProperty("error")){
        console.log("error block");
        alert(data["error"]);
      }
      else{
        this.content = JSON.stringify(data["content"]);
      }
    })
  }

}
