import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
