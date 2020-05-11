import { Component, OnInit } from '@angular/core';
import { GlobalUser } from '../user'

@Component({
  selector: 'app-host-page-setup',
  templateUrl: './host-page-setup.component.html',
  styleUrls: ['./host-page-setup.component.css']
})
export class HostPageSetupComponent implements OnInit {

  user = GlobalUser
  constructor() { }

  ngOnInit(): void {
  }

}
