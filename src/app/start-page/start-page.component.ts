import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

var headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');

let options = { headers: headers, withCredentials: true };

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  user: User = {
    name: null,
    hostType: null
  }
  title = "Welcome to RemoteLabs"
  constructor(private http: HttpClient) {

  }
  
  

  ngOnInit(){
  }
  
  activateButton(): boolean {
    if (this.user.name === null || this.user.name.trim() === ''){
      return false;
    }
    return true;
  }

  
  
  makeUserTypeClient(): void {
    this.user.hostType = 'client';

    this.http.post<Result>("http://127.0.0.1:8080/join", {name: this.user.name, id: "", password: ""}, options).subscribe(result => {
    })
  }

  makeUserTypeHost(): void {
    this.user.hostType = 'host';

    this.http.post<Result>("http://127.0.0.1:8080/start", {session:{}, sessionJoin: {name: this.user.name}}, options).subscribe(result => {
    })
  }

}

class Result {
  constructor(public OK: Boolean, public ID: String){}
}

