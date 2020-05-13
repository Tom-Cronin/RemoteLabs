import { Component, OnInit } from '@angular/core';
import { GlobalUser } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-host-page-setup',
  templateUrl: './host-page-setup.component.html',
  styleUrls: ['./host-page-setup.component.css']
})
export class HostPageSetupComponent implements OnInit {

  user = GlobalUser
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }


  
  
}
