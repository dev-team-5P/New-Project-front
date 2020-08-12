import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems ;
  private logo;
  constructor( private router: Router,
    private appSidebarService: SidebarService,
    private auth: AuthService,
    private avatar: AvatarService
    ) {
      this.logo = this.avatar.avatar$;
    }
    avata = localStorage.getItem('avatar') || {};
    decoded = this.appSidebarService.decoded;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    console.log(this.decoded);
    this.navItems = this.appSidebarService.items$;
    localStorage.setItem('avatar', this.decoded.data.logo);
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
      this.auth.logout();
      this.router.navigate(['/']);
    }
}
