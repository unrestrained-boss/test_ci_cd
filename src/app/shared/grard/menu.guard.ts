import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {TitleService} from '../services/title/title.service';

@Injectable({
  providedIn: 'root'
})
export class MenuGuard implements CanActivateChild {
  siteName = '酒友科技';
  constructor(private titleService: TitleService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (childRoute.component) {
      this.titleService.setTitle(`${childRoute.data.title}-${this.siteName}`);
    }
    return true;
  }

}
