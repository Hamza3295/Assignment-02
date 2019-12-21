import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  sports = [
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
  ];
  constructor() {}

  get getStudents() {
    return this.sports;
  }

  getAllStudents() {
    return this.sports;
  }

  deleteASport(id) {
    this.sports = this.sports.filter(e => {
      return e.id !== id;
    });
  }
}
