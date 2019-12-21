import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'sportslist',
    children: [
      {
        path: '',
        loadChildren:
          './sportslist/sportslist.module#SportslistPageModule'
      },
      {
        path: ':sportid',
        loadChildren: './sport/sport.module#SportPageModule'
      }
    ]
   }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
