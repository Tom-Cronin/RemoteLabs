import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoinedPageSettingsService {

  currentView = 'dual'

  restoreDefaults() {
    this.currentView = 'dual'
  }

  constructor() { }
}
