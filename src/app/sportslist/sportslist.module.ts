import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportslistPageRoutingModule } from './sportslist-routing.module';

import { SportslistPage } from './sportslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportslistPageRoutingModule
  ],
  declarations: [SportslistPage]
})
export class SportslistPageModule {}
