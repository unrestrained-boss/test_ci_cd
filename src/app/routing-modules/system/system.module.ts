import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogComponent} from './log/log.component';
import {BannerComponent} from './banner/banner.component';
import {AdministrationComponent} from './administration/administration.component';
import {LogisticsCompanyComponent} from './logistics-company/logistics-company.component';
import {RuleComponent} from './rule/rule.component';
import {RouterModule, Routes} from '@angular/router';
import {ConfigureComponent} from './configure/configure.component';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';

const routes: Routes = [
  {
    path: '',
    component: BannerComponent,
    data: {
      title: 'banner 管理',
    }
  },
  {
    path: 'administration',
    component: AdministrationComponent,
    data: {
      title: '管理员管理',
    }
  },
  {
    path: 'rule',
    component: RuleComponent,
    data: {
      title: '角色管理',
    }
  },
  {
    path: 'logistics-company',
    component: LogisticsCompanyComponent,
    data: {
      title: '物流公司管理',
    }
  },
  {
    path: 'log',
    component: LogComponent,
    data: {
      title: '日志管理',
    }
  },
  {
    path: 'configure',
    component: ConfigureComponent,
    data: {
      title: '系统配置',
    }
  }
];

@NgModule({
  declarations: [LogComponent, BannerComponent, AdministrationComponent, LogisticsCompanyComponent, RuleComponent, ConfigureComponent],
  imports: [
    ButtonModule,
    PaginatorModule,
    TableModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SystemModule {
}
