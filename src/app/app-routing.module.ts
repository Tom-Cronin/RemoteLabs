import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {StartPageComponent } from './start-page/start-page.component'
import {HostPageSetupComponent } from './host-page-setup/host-page-setup.component'
import {LabPageComponent } from './lab-page/lab-page.component'
import { JoinPageComponent} from './join-page/join-page.component'

const routes: Routes = 
[
  {path: '', redirectTo: '/startPage', pathMatch: 'full'},
  {path: 'startPage', component: StartPageComponent},
  {path: 'hostPageSetup', component: HostPageSetupComponent, data : {thisUser : 'user'}},
  {path: 'labPage', component: LabPageComponent, data : {thisUser : 'user'}},
  {path: 'joinAHost', component: JoinPageComponent, data : {thisUser : 'user'}}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
