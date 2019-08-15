import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app1';
  items: MenuItem[] = [
    {
      label: '系统管理',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {label: 'banner管理', icon: 'pi pi-fw pi-plus', routerLink: '/system'},
        {label: '管理员管理', icon: 'pi pi-fw pi-plus', routerLink: '/system/administration'},
        {label: '角色管理', icon: 'pi pi-fw pi-plus', routerLink: '/system/rule'},
        {label: '物流公司管理', icon: 'pi pi-fw pi-plus', routerLink: '/system/logistics-company'},
        {label: '日志管理', icon: 'pi pi-fw pi-plus', routerLink: '/system/log'},
        {label: '系统配置', icon: 'pi pi-fw pi-plus', routerLink: '/system/configure'},
      ]
    },
    {
      label: '用户管理',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {label: '用户管理', icon: 'pi pi-fw pi-trash', routerLink: '/user'},
      ]
    },
    {
      label: '订单管理',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {label: '订单管理', icon: 'pi pi-fw pi-trash', routerLink: '/order'},
        {label: '奖励管理', icon: 'pi pi-fw pi-refresh', routerLink: '/order/reward'}
      ]
    },
    {
      label: '产品管理',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {label: '产品管理', icon: 'pi pi-fw pi-trash', routerLink: '/product'},
        {label: '分类管理', icon: 'pi pi-fw pi-refresh', routerLink: '/product/classification'}
      ]
    }
  ];

  constructor() {
  }
}
