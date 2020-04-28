import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {StartPageComponent } from './start-page/start-page.component'
import {HostPageSetupComponent } from './host-page-setup/host-page-setup.component'

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartPageComponent},
  {path: 'hostPageSetup', component: HostPageSetupComponent, data : {thisUser : 'user'}}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
