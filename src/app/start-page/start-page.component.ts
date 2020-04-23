import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  user: User = {
    name: '',
    hostType: ''
  }
  title = "Welcome to RemoteLabs"
  constructor() { }
  
  

  ngOnInit(){
  }
  

  
  makeUserTypeClient(): void {
    this.user.hostType = 'client';
  }

  makeUserTypeHost(): void {
    this.user.hostType = 'host';
  }

}

