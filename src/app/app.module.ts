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
import { JoinedPageComponent } from './joined-page/joined-page.component';
import { AppRoutingModule } from './app-routing.module';
import { JoinedPageHeaderComponent } from './joined-page-header/joined-page-header.component';
import { JoinedPageLectureComponent } from './joined-page-lecture/joined-page-lecture.component';
import { JoinedPageEditorComponent } from './joined-page-editor/joined-page-editor.component'




@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    JoinedPageComponent,
    JoinedPageHeaderComponent,
    JoinedPageLectureComponent,
    JoinedPageEditorComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
