import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { StartPageComponent } from './start-page/start-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { MatGridListModule } from '@angular/material/grid-list';
import { HostPageSetupComponent } from './host-page-setup/host-page-setup.component';
import { AppRoutingModule } from './app-routing.module'
import { CodemirrorComponent } from './codemirror/codemirror.component'

import { HttpClientModule } from '@angular/common/http'
import { CodemirrorModule } from '@ctrl/ngx-codemirror';



@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HostPageSetupComponent,
    CodemirrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    HttpClientModule,
    AppRoutingModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
