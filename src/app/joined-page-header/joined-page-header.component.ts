import { Component, OnInit } from '@angular/core';
import { ConfirmMessageService } from '../confirm-message.service';
import { JoinedPageSettingsService } from '../joined-page-settings.service';


@Component({
  selector: 'app-joined-page-header',
  templateUrl: './joined-page-header.component.html',
  styleUrls: ['./joined-page-header.component.css']
})
export class JoinedPageHeaderComponent implements OnInit {

  waitingForHelp = false; /* tracks if student is currently waiting for help */ 
  helpButtonText = "Ask for help";
  normalFontColor = '#ca3e47'; /*pink*/
  normalButtonColor = '#414141'; /*gray*/
  helpButtonColor = this.normalFontColor;
  helpButtonbgColor = this.normalButtonColor;
  callConnected = false; /* ToDo: get this info from a service */

  changeView(viewType: string){
    this.pageSettings.currentView = viewType;
  }

  confirmLeave() {
    /*ToDo: creates a message asking if the joined person wants to leave*/
    this.confirmMessage.updateMessage('Are you sure you want to leave?', '1');
  }

  helpButton () {
    /* handles requests for help, ending request for help */
    if (this.waitingForHelp){
      /* Todo: cancel request to backend for help */
      this.helpButtonText = "Ask for help";
      this.helpButtonColor = this.normalFontColor;
      this.helpButtonbgColor = this.normalButtonColor;
      this.waitingForHelp = false;
    } 
    else {
      /* Todo: make request to backend for help */
      this.helpButtonText = "Cancel help";
      this.helpButtonColor = this.normalButtonColor;
      this.helpButtonbgColor = this.normalFontColor;
      this.waitingForHelp = true;
      
    }
  }

  i() {
    /*filler, need to remove*/
  }


  constructor(public confirmMessage:ConfirmMessageService, public pageSettings:JoinedPageSettingsService) { }

  ngOnInit(): void {
  }

}
