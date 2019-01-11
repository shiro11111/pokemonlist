import { createSelector } from '@ngrx/store';
import { getBeerState } from '../app.reducers';
import { getBeerListState } from './beer.reducers';
import { ListState } from '../shared/models/list-state';
import { Item } from '../models/item';


export const getAllBeersState = createSelector(getBeerState, getBeerListState);

export const beerListSelector = createSelector(
  getAllBeersState,
  (state: ListState<Item>) => state && state.data
);

export const beerNamesSelector = createSelector(
  getAllBeersState,
  (state: ListState<Item>) => state && state.data && state.data.map((beer: Item) => beer && beer.name));


export const getBeerIds = createSelector(
  getAllBeersState,
  (state: ListState<Item>) => state && state.data && state.data.map((beer: Item) => beer && beer.id));

export const beerIbuNumber = createSelector(
  getAllBeersState,
  (state: ListState<Item>) => state && state.data && state.data.filter((beer: Item) => beer && beer.ibu > 50));



