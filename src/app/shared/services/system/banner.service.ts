import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() {
  }

  getBannerList(): Promise<IBanner[]> {
    return Promise.resolve([
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 2, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 3, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 4, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 5, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 1, title: 'banner名称', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
      {id: 11, title: 'banner名称q', image: 'https://avatars2.githubusercontent.com/u/19339440?v=4?v=3&s=80', state: 1, sort: 1},
    ]);
  }
}

export interface IBanner {
  id: number;
  title: string;
  image: string;
  state: number;
  sort: number;
}
