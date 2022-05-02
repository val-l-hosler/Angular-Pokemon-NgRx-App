import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {concatMap, forkJoin, map, Observable} from 'rxjs';

import {PokemonCardInterface} from '../interfaces/pokemon-card.interface';

interface Results {
  count: number,
  next: string,
  previous: string,
  results:
    {
      name: string,
      url: string
    }[]
}

@Injectable({
  providedIn: 'root'
})
export class PokemonCardsService {
  constructor(private http: HttpClient) {
  }

  getPokemonInfo(): Observable<PokemonCardInterface[]> {
    return this.http.get<Results>('https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=20')
      .pipe(
        map((getResponse: Results) => {
          const {results: pokemonObjArr} = getResponse;
          const speciesUrls = pokemonObjArr.map(pokemon => pokemon.url);
          return speciesUrls;
        }),
        concatMap((urls: string[]) => {
          // forkJoin waits for all Observables in the arr to resolve
          return forkJoin(urls.map(url => {
            return this.http.get<PokemonCardInterface>(url);
          }));
        })
      );
  }
}
