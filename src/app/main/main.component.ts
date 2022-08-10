import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MainService } from './main.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  filename : string = "";
  error : string = "";
  enable: boolean = false;
  file = new File(["foo"], "temp");
  constructor(private router: Router, private service: MainService) { }

  ngOnInit(): void {
    let button = document.getElementById("validate-button") as HTMLInputElement | null;
    button?.setAttribute("disabled", '')
  }

  logout(){
    sessionStorage.removeItem("token");
    this.router.navigate(["login"]);
  }
  validate() {
    console.log("validating");
    console.log(this.file);
    let username = sessionStorage.getItem("username") || "";
    this.service.validateJson(this.file, username, this.filename).subscribe(data => {
      if(data.hasOwnProperty("error")){
        console.log("error block");
        // this.error = data["error"]
        // const err = data["error"] as string;
        alert(data['error'] as string);
      }
      else{
        console.log("success block");
        alert(data["message"]);
      }
    });
  }

  go(){
    this.router.navigate(["display"]);
  }

  onFileSelected(event:any) {  
  
    const file:File = event.target.files[0];  
    console.log(file);
    if (file) {  
        this.filename = file.name;  
        console.log(this.filename)
        if(!this.filename.endsWith(".json")){
          this.error = "Incorrect File Extension. Please select a json file"
          console.log(this.error)
        }
        else{
          this.file = file;
          let button = document.getElementById("validate-button") as HTMLInputElement | null;
          button?.removeAttribute("disabled");
        }
    }  
}  
}
