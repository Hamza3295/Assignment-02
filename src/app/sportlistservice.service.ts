import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportlistserviceService {
  sports =[
  {id: '01', name: 'Archery' },
  {id: '08', name: 'Cricket' },
  {id: '03', name: 'Football' },
  {id: '04', name: 'Tennis' },
  {id: '05', name: 'Volleyball' },
  {id: '06', name: 'Snooker' },
  {id: '07', name: 'TableTennis' },
  {id: '08', name: 'Badminton' },
  {id: '09', name: 'Racing' },
  {id: '10', name: 'Cycling' },
  ]
  constructor() { }
  
  returnSportList() {
    return this.sports;
  }

  deleteSport(id) {
    this.sports = this.sports.filter(e => {
      return e.id !== id;
    });
  }
}
