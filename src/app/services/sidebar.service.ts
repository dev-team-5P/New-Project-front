import { Injectable } from '@angular/core';
import { navItems } from './../_nav';
import { INavData } from '@coreui/angular';
import { Observable, of } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  items$: Observable<INavData[]>;
  role: string;
  decoded: any;
  private navItems = navItems;
  token = localStorage.getItem('token');
  constructor() {
    this.items$ = this.getNavItemsByRole();
  }
  getNavItemsByRole(): Observable<INavData[]> {
    // tslint:disable-next-line: triple-equals
    if (this.token != null && this.token != undefined) {
      this.decoded = jwt_decode(this.token);
      this.role = this.decoded.data.role;
    }
// guard by role **********
    if (this.role === 'superAdmin') {
      const filtredItems = this.navItems.filter((item) => {
        return (
          item.url === '/dashboard' ||
          item.url === '/superadmin/listetablissement' ||
          item.url === '/Setting'
        );
      });
      return of(filtredItems);
    }
    if (this.role === 'etablisement') {
      const filtredItems = navItems.filter((item) => {
        return (
          item.url === '/dashboard' ||
          item.name === 'Etablissement' ||
          item.url === '/Settingetab'
        );
      });
      return of(filtredItems);
    }
    if (this.role === 'condidat') {
      const filtredItems = navItems.filter((item) => {
        return (
          item.url === '/dashboard' ||
          item.url === '/chat' ||
          item.url === '/candidat'
        );
      });
      return of(filtredItems);
    }
  }
  reloadNavItem() {
    this.items$ = this.getNavItemsByRole();
  }
}
