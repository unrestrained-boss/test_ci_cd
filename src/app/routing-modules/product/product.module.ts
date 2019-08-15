import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ClassificationComponent } from './classification/classification.component';
import {Route, RouterModule} from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: ProductComponent,
    data: {
      title: '产品管理',
    }
  },
  {
    path: 'classification',
    component: ClassificationComponent,
    data: {
      title: '分类管理',
    }
  }
];
@NgModule({
  declarations: [ProductComponent, ClassificationComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductModule { }
