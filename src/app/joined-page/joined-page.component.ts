import { Component, OnInit } from '@angular/core';
import { JoinedPageSettingsService } from '../joined-page-settings.service';

@Component({
  selector: 'app-joined-page',
  templateUrl: './joined-page.component.html',
  styleUrls: ['./joined-page.component.css']
})
export class JoinedPageComponent implements OnInit {

  
  constructor(public pageSettings:JoinedPageSettingsService) { }

  ngOnInit(): void {
  }

}
