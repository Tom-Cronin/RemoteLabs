import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmMessageService {

  message: string;
  id: string;

  /* 
  Confirm message currently checks if the user wants to do soemthing:
    clicking 'no' clears the message and makes it disappear
    clicking 'yes' does the thing. This thing depends on the id
        id = 1: clears any joined user data (when it exists), then returns to start
  */

  updateMessage(updateMessage: string, updateId: string){
    this.message = updateMessage;
    this.id = updateId;
  }

  clearMessage(){
    this.message = "";
    this.id = "";
  }

  constructor() { }
}
