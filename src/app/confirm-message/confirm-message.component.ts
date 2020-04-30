import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConfirmMessageService} from '../confirm-message.service'

@Component({
  selector: 'app-confirm-message',
  templateUrl: './confirm-message.component.html',
  styleUrls: ['./confirm-message.component.css']
})
export class ConfirmMessageComponent implements OnInit {

  

  constructor(public confirmMessage: ConfirmMessageService, private route: ActivatedRoute,
    private router: Router) { }

  handleConfirmation() {
    if (this.confirmMessage.id = "1"){
      this.leaveJoinedSession;
    }
  }

  leaveJoinedSession(){
    /* ToDo: remove any saved user data */
    this.router.navigate(['/start']);
  }

  nevermind(){
    this.router.navigate(['/start']);
    this.confirmMessage.clearMessage();
  }


  ngOnInit(): void {
  }

}

/*
messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  } */