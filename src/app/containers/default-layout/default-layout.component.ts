import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems ;
  constructor( private router: Router,
     private appSidebarService: SidebarService,
     private auth: AuthService
     ) {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.navItems = this.appSidebarService.items$;
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
      this.auth.logout();
      this.router.navigate(['/']);
    }
}
