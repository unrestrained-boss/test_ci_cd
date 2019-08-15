import {Component, OnInit} from '@angular/core';
import {IBanner, BannerService} from '../../../shared/services/system/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  cols = [
    {field: 'title', header: '名称', width: '200px'},
    {field: 'image', header: '图片', width: '100px', type: 'image',},
    {field: 'state', header: '状态', width: '80px'},
    {field: 'sort', header: '排序', width: 'auto'},
    {type: 'action', header: '操作', width: '170px'},
  ];
  args: IBanner[] = [];

  constructor(private bannerService: BannerService) {
  }

  ngOnInit() {
    this.init();
  }

  async init() {
    this.args = await this.bannerService.getBannerList();
  }
  handleEdit(data: IBanner) {
    console.log(data);
  }

}
