import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), },
  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'pcreate', loadChildren: () => import('./pages/pcreate/pcreate.module').then(m => m.PcreateModule) },
  { path: 'lists', loadChildren: () => import('./pages/lists/lists.module').then(m => m.ListsModule) },
  
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
