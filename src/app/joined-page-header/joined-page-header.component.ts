import { Component, OnInit } from '@angular/core';
import { ConfirmMessageService } from '../confirm-message.service';

@Component({
  selector: 'app-joined-page-header',
  templateUrl: './joined-page-header.component.html',
  styleUrls: ['./joined-page-header.component.css']
})
export class JoinedPageHeaderComponent implements OnInit {

  confirmLeave() {
    /*ToDo: creates a message asking if the joined person wants to leave*/
    this.confirmMessage.updateMessage('Are you sure you want to leave?', '1');
    

  }

  i() {
    /*filler, need to remove*/
  }

  constructor(public confirmMessage:ConfirmMessageService) { }

  ngOnInit(): void {
  }

}
