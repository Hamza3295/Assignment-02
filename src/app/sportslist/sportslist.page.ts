import { Component, OnInit } from '@angular/core';

import { SportsService } from '../sports.service';
import { Router } from '@angular/router';
import { SportlistserviceService } from './../sportlistservice.service';
@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.page.html',
  styleUrls: ['./sportslist.page.scss'],
})
export class SportslistPage implements OnInit {

  constructor(private router: Router,
              private sportlistserviceService: SportlistserviceService) {}
  sports = [];

  ngOnInit() {
    console.log('nothing on init');
  }
  changeUrl(user) {
    const id = user.id.substring(0, 4);
    const url = `sportslist/${id}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }

  ionViewDidEnter() {
    console.log('view Enter');
    this.sports = this.sportlistserviceService.returnSportList();
  }
}

