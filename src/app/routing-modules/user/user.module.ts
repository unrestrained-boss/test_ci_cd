import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: UserComponent,
  }
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserModule { }
