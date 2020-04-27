import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { JoinedPageComponent } from './joined-page/joined-page.component';

const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'joined', component: JoinedPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }