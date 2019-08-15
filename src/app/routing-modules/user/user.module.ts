import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: UserComponent,
    data: {
      title: '用户管理',
    }
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
