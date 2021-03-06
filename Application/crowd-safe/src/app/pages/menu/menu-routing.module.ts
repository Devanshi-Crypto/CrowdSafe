import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
  },
    {
    path: 'upload',
    loadChildren: () => import('../upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'heatmap',
    loadChildren: () => import('../heatmap/heatmap.module').then( m => m.HeatmapPageModule)
  },
  {
    path: 'mainpage',
    loadChildren: () => import('../mainpage/mainpage.module').then( m => m.MainpagePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
