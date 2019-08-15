import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { RewardComponent } from './reward/reward.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: OrderComponent,
    data: {
      title: '订单管理',
    }
  },
  {
    path: 'reward',
    component: RewardComponent,
    data: {
      title: '奖励管理',
    }
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
