import { Component, OnInit } from '@angular/core';
import { GlobalUser} from "../user"

@Component({
  selector: 'app-lab-page',
  templateUrl: './lab-page.component.html',
  styleUrls: ['./lab-page.component.css']
})
export class LabPageComponent implements OnInit {

  user: GlobalUser
  constructor() { }

  ngOnInit(): void {
  }

  isUserHost(): boolean {
    if (GlobalUser.userType == 'host'){
      console.log("true")
      return true;
    } 
    else {
      return false
    }
  }

}
