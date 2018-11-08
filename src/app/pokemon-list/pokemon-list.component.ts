import { Component, OnInit } from '@angular/core';
import { List, Pokemon } from '../pokemon';
import { Observable } from 'rxjs';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { LoadPokemonList } from './pokemon-list.actions';
import { PokemonListState } from './pokemon-list.reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  pokemon$: Observable<Pokemon[]>

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadPokemonList());
    this.pokemon$ = this.store.select('pokemonList').pipe(map((state: PokemonListState) => state && state.list));
  }

}
