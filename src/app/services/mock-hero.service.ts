import {Injectable} from '@angular/core';
import {Hero} from '../model/hero';
import {CAMPAIGN, HEROES} from './mock-heros';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class MockHeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }


  getHero(chosenId: any): Observable<Hero> {
    const url = `${this.heroesUrl}/${chosenId}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => console.log(`fetched hero id=${chosenId}`)),
      catchError(this.handleError<Hero>(`getHero id=${chosenId}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => console.log(`fetched hero id=${hero.id}`)),
      catchError(this.handleError<Hero>(`updateHero id=${hero.id}`))
    );
  }

  getCampaign(): any {
    return CAMPAIGN;
  }
}
