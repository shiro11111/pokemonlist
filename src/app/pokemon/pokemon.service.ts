import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {List, Pokemon} from '../models/pokemon';
import {filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  loadPokemons(): Observable<Pokemon[]> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/').pipe(
      filter((res: List) => !!res),
      map((res: List) => res.results)
    );
  }

  loadPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  constructor(private http: HttpClient) {
  }
}
