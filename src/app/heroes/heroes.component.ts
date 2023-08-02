import { Component, OnDestroy, OnInit } from '@angular/core';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  sub!: Subscription;

  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.sub = this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
    // this.getHeroes();
  }
  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  // }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
