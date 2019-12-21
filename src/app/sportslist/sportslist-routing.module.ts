import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportslistPage } from './sportslist.page';

const routes: Routes = [
  {
    path: '',
    component: SportslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportslistPageRoutingModule {}
