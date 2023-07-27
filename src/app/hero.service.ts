import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {} // service-in-service

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private heroesUrl: string = 'api/heroes'; // defining the url to web api in form :/base/collectionName

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES);
    // this.messageService.add('HeroService: fetched heroes');
    // return heroes;
    // this.log('HeroService: fetched heroes')
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')), //rxjs operator which executes a process without modifying values emitted
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
