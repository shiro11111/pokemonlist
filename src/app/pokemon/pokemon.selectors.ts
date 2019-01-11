import { createSelector } from '@ngrx/store';
import { getPokemonState } from '../app.reducers';
import { getPokemonListState } from './pokemon.reducers';
import { ListState } from '../shared/models/list-state';
import { Pokemon } from '../models/pokemon';

export const getAllPokemonsState = createSelector(getPokemonState, getPokemonListState);

export const pokemonListSelector = createSelector(
  getAllPokemonsState,
  (state: ListState<Pokemon>) => state && state.data
);

export const pokemonNamesSelector = createSelector(
  getAllPokemonsState,
  (state: ListState<Pokemon>) => state && state.data && state.data.map((pokemon: Pokemon) => pokemon && pokemon.name));



