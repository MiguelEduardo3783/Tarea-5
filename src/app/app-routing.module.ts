import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'page4',
    loadChildren: () => import('./page4/page4.module').then( m => m.Page4PageModule)
  },
  {
    path: 'page5',
    loadChildren: () => import('./page5/page5.module').then( m => m.Page5PageModule)
  },
  {
    path: 'pikachu',
    loadChildren: () => import('./page1/pikachu/pikachu.module').then( m => m.PikachuPageModule)
  },
  {
    path: 'kirby',
    loadChildren: () => import('./page1/kirby/kirby.module').then( m => m.KirbyPageModule)
  },
  {
    path: 'fox',
    loadChildren: () => import('./page1/fox/fox.module').then( m => m.FoxPageModule)
  },
  {
    path: 'captain-falcon',
    loadChildren: () => import('./page1/captain-falcon/captain-falcon.module').then( m => m.CaptainFalconPageModule)
  },
  {
    path: 'mario',
    loadChildren: () => import('./page1/mario/mario.module').then( m => m.MarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
