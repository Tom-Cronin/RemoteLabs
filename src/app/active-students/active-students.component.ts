import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

var headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');

let options = { headers: headers, withCredentials: true };


@Component({
  selector: 'app-active-students',
  templateUrl: './active-students.component.html',
  styleUrls: ['./active-students.component.css']
})
export class ActiveStudentsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  students: [];
  ngOnInit(): void {
    this.http.post<any>("http://feynman.netsoc.co:8080/dev/", {}, options)
    .subscribe(data => {
      console.log(data.users)
     this.students = data.users
    })


  }

}
