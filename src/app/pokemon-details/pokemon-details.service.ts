import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsService {

  constructor(private http: HttpClient) { }

  loadPokemonDetails(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/${id}');
  }
}
