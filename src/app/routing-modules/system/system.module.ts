import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log/log.component';
import { BannerComponent } from './banner/banner.component';
import { AdministrationComponent } from './administration/administration.component';
import { LogisticsCompanyComponent } from './logistics-company/logistics-company.component';
import { RuleComponent } from './rule/rule.component';
import {RouterModule, Routes} from '@angular/router';
import { ConfigureComponent } from './configure/configure.component';

const routes: Routes = [
  {
    path: '',
    component: BannerComponent,
  },
  {
    path: 'administration',
    component: AdministrationComponent,
  },
  {
    path: 'rule',
    component: RuleComponent,
  },
  {
    path: 'logistics-company',
    component: LogisticsCompanyComponent,
  },
  {
    path: 'log',
    component: LogComponent,
  },
  {
    path: 'configure',
    component: ConfigureComponent,
  }
];

@NgModule({
  declarations: [LogComponent, BannerComponent, AdministrationComponent, LogisticsCompanyComponent, RuleComponent, ConfigureComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SystemModule { }
