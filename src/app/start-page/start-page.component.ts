import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { IpcService } from '../ipc.service';

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
  constructor(private readonly _ipc: IpcService) {

  }
  
  

  ngOnInit(){
  }
  
  activateButton(): boolean {
    if (this.user.name === null || this.user.name.trim() === ''){
      return false
    }
    return true
  }

  
  
  makeUserTypeClient(): void {
    this.user.hostType = 'client';
  }

  makeUserTypeHost(): void {
    this.user.hostType = 'host';

    this._ipc.send("startServer")
  }

}

