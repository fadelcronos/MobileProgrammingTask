import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'Assignment1', loadChildren: () => import('./assignment1/assignment1.module').then( m => m.Ass1PageModule)},
  { path: 'Assignment2', loadChildren: () => import('./assignment2/assignment2.module').then( m => m.Ass2PageModule)},
  { path: 'Assignment3', loadChildren: () => import('./assignment3/assignment3.module').then( m => m.Ass3PageModule)},
  { path: 'Assignment4', loadChildren: () => import('./assignment4/assignment4.module').then( m => m.Ass4PageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
