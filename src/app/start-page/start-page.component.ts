import { Component, OnInit, OnDestroy , Inject, Input, Output } from '@angular/core';
import { GlobalUser } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

var headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');

let options = { headers: headers, withCredentials: true };

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})

 
export class StartPageComponent implements OnInit, OnDestroy {

  
  title = "Welcome to RemoteLabs"
  user = GlobalUser
  constructor(private http: HttpClient) { }
  
  

  ngOnInit(){
  }

  ngOnDestroy() {
  }
  
  activateButton(): boolean {
    if (GlobalUser.user === null || GlobalUser.user.trim() === ''){
      return false
    }
    return true;
  }

  
  
  makeUserTypeClient(): void {
    GlobalUser.userType = 'client';

    this.http.post<Result>("http://127.0.0.1:8080/join", {name: this.user.name, id: "", password: ""}, options).subscribe(result => {
    })
    
  }


  makeUserTypeHost(): void {
    GlobalUser.userType = 'host';

    this.http.post<Result>("http://127.0.0.1:8080/start", {session:{}, sessionJoin: {name: this.user.name}}, options).subscribe(result => {
    })
    
  }
}

class Result {
  constructor(public OK: Boolean, public ID: String){}
}

