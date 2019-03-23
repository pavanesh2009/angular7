import {Component, OnInit} from '@angular/core';
import {Hero} from '../model/hero';
import {MockHeroService} from '../services/mock-hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  constructor(private heroService: MockHeroService) {
  }

  heroes: Hero[];
  selectedHero: Hero;
  newHero: Hero;
  isAddFormVisible: boolean = false;
  searchTerm:string;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => {
        console.log(heroes);
        this.heroes = heroes;
      });
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

  addHero(heroName: string) {
    if (!heroName) {
      return;
    }
    this.newHero = new Hero();
    this.newHero = {'id': 1234, 'name': heroName, 'birthday': ''};
    this.heroes.push(this.newHero);
  }

  showHideAddForm() {
    this.isAddFormVisible = !this.isAddFormVisible;
  }

}
