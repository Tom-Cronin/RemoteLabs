import { Component, OnInit,EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { conectedCount} from "../user"

var headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');

let options = { headers: headers, withCredentials: true };


@Component({
  selector: 'app-active-students ',
  templateUrl: './active-students.component.html',
  styleUrls: ['./active-students.component.css']
})
export class ActiveStudentsComponent implements OnInit {
  
  students: [];
  count = 0;

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http.post<any>("http://feynman.netsoc.co:8080/dev/", {}, options)
    .subscribe(data => {
      console.log(data.users);
     this.students = data.users;
     this.count = this.students.length
     conectedCount.connectedStudent = this.count;
    })


  }

}
