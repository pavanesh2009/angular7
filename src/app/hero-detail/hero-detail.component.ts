import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../model/hero';
import {Router, ActivatedRoute} from '@angular/router';
import {MockHeroService} from '../services/mock-hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private activeRoute: ActivatedRoute, private heroService: MockHeroService, private route: Router) {
  }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');

    this.getHero(id);
  }


  getHero(id: any): void {
    this.heroService.getHero(id).subscribe(response => {
      this.hero = response;
      console.log(this.hero);
    });
  }

  save() {
    this.heroService.updateHero(this.hero).subscribe(response => {
      console.log('update happened');
      this.route.navigate(['/heroes']);
    });
  }
}
