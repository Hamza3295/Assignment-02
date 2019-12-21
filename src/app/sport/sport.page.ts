import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SportsService } from './../sports.service';
import { SportlistserviceService } from '../sportlistservice.service';


@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private sportsService: SportsService,
    private sportlistserviceService: SportlistserviceService
  ) {}

  sports = [];

  singleSport;

  ngOnInit() {
    this.sports = this.sportlistserviceService.returnSportList();
    // this.students = this.studentsListService.getAllStudents();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('studentid');

      this.singleSport = this.sports.find(obj => {
        return obj.id.includes(val);
      });
    });
  }

  async deleteSport() {
    console.log('deleteSport', this.singleSport);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleSport.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.sportsService.deleteASport(this.singleSport.id);
            this.router.navigateByUrl('/studentslist');
          }
        }
      ]
    });
    alert.present();
  }
}
