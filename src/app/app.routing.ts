import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/common/login/login.component';
import { RegisterComponent } from './views/common/register/register.component';
import { RegisteretabComponent } from './views/common/registeretab/registeretab.component';
// import { RegisteradminComponent } from './views/common/registeradmin/registeradmin.component';
import { ForgetComponent } from './views/Common/forget/forget.component';
import { ResetComponent } from './views/Common/reset/reset.component';
import { ConnectGuardGuard } from './guards/connect-guard.guard';
import { from } from 'rxjs';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'registeretab',
    component: RegisteretabComponent,
    data: {
      title: 'Register Page',
    },
  },
  // {
  //   path: 'registeradmin',
  //   component: RegisteradminComponent,
  //   data: {
  //     title: 'Register Page',
  //   },
  // },
  {
    path: 'forget',
    component: ForgetComponent,
    data: {
      title: 'Forget Page'
    }
  },
  {
    path: 'reset',
    component: ResetComponent,
    data: {
      title: 'Page reset',
    },
  },
  // {
  //   path: 'Setting',
  //   component: ParametrageComponent,
  //   data: {
  //     title: 'Page Setting'
  //   }
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [ConnectGuardGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./views/chat/chat.module').then(
            (m) => m.ChatModule
          ),
      },

      {
        path: 'superadmin',
        loadChildren: () =>
          import('./views/superadmin/superadmin.module').then(
            (m) => m.SuperadminModule
          ),
      },
      {
        path: 'etablissement',
        loadChildren: () =>
          import('./views/etablisseement/etablissement.module').then(
            (m) => m.EtablissementModule
          ),
      },
      {
        path: 'Setting',
        loadChildren: () => import('./views/parametrage/parametrage.module').then((m => m.ParametrageModule))
      },
      {
        path: 'candidat',
        loadChildren: () =>
          import('./views/candidat/candidat.module').then(
            (m) => m.CandidatModule
          ),
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
