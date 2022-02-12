import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './views/containers/default-layout/default-layout.component';
import { P403Component, P404Component, P500Component } from './views/error';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '403',
    component: P403Component,
    data: {
      title: 'PageModel 403',
    },
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'PageModel 404',
    },
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'PageModel 500',
    },
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./views/employee/employee.module').then(mod => mod.EmployeeModule)
      },
    ]
  },
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
