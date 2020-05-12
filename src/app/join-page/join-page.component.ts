
import { Component, OnInit } from '@angular/core';
import { GlobalUser } from '../user'

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css']
})
export class JoinPageComponent implements OnInit {

  user = GlobalUser
  id: string
  password:string
  constructor() { }

  ngOnInit(): void {
  
  }

}


