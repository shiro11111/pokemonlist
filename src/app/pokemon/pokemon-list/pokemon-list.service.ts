import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {List, Pokemon} from '../../pokemon';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  loadPokemons(): Observable<Pokemon[]> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/').pipe(
      filter((res: List) => !!res),
      map((res: List) => res.results)
    );
  }

  constructor(private http: HttpClient) {
  }
}
