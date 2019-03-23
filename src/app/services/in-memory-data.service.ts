import { Injectable } from '@angular/core';
import {Hero} from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }


  createDb() {
    const heroes = [
      {id: 11, name: 'Mr. Nice', birthday: '2018-01-04T00:00:00Z'},
      {id: 12, name: 'Narco', birthday: '2018-01-04T00:00:00Z'},
      {id: 13, name: 'Bombasto', birthday: '2018-01-04T00:00:00Z'},
      {id: 14, name: 'Celeritas', birthday: '2018-01-04T00:00:00Z'},
      {id: 15, name: 'Magneta', birthday: '2018-01-04T00:00:00Z'},
      {id: 16, name: 'RubberMan', birthday: '2018-01-04T00:00:00Z'},
      {id: 17, name: 'Dynama', birthday: '2018-01-04T00:00:00Z'},
      {id: 18, name: 'Dr IQ', birthday: '2018-01-04T00:00:00Z'},
      {id: 19, name: 'Magma', birthday: '2018-01-04T00:00:00Z'},
      {id: 20, name: 'Tornado', birthday: '2018-01-04T00:00:00Z'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
