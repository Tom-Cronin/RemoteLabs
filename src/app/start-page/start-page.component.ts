import { Component, OnInit, OnDestroy , Inject, Input, Output} from '@angular/core';
import { GlobalUser } from '../user';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})


export class StartPageComponent implements OnInit, OnDestroy {

  
  title = "Welcome to RemoteLabs"
  user = GlobalUser
  constructor() { }
  
  

  ngOnInit(){
  }

  ngOnDestroy() {
  }
  
  activateButton(): boolean {
    if (GlobalUser.user === null || GlobalUser.user.trim() === ''){
      return false
    }
    return true
  }

  
  
  makeUserTypeClient(): void {
    GlobalUser.userType = 'client';

  }


  makeUserTypeHost(): void {
    GlobalUser.userType = 'host';
  }
}

