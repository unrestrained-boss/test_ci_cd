import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { RewardComponent } from './reward/reward.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: OrderComponent
  },
  {
    path: 'reward',
    component: RewardComponent
  }
];

@NgModule({
  declarations: [OrderComponent, RewardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class OrderModule { }
