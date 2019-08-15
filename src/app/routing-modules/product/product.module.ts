import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ClassificationComponent } from './classification/classification.component';
import {Route, RouterModule} from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'classification',
    component: ClassificationComponent
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
