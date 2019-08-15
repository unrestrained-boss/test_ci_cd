import {APP_INITIALIZER, NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';
import {MenuGuard} from './shared/grard/menu.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [MenuGuard],
    children: [
      {
        path: 'system',
        loadChildren: () => import('./routing-modules/system/system.module').then(m => m.SystemModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./routing-modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./routing-modules/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./routing-modules/product/product.module').then(m => m.ProductModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER, multi: true, useFactory: () => {
        return () => {
          console.log(123);
        };
      }
    },
    // { provide: ActivatedRoute}
  ]
})
export class AppRoutingModule {
}
