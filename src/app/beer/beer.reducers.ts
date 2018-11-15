import { Item } from '../models/item';
import {
  BeerActions,
  LOAD_BEERLIST,
  LOAD_BEERLIST_FAIL,
  LOAD_BEERLIST_SUCCESS,
  LOAD_BEER_DETAILS,
  LOAD_BEER_DETAILS_SUCCESS,
  LOAD_BEER_DETAILS_FAIL
} from './beer.actions';
import { ListState } from '../shared/models/list-state';
import { ItemState } from '../shared/models/item-state';

export interface BeerState {
  beer: ItemState<Item>;
  list: ListState<Item>;
}

const initialState: BeerState = {
  beer: null,
  list: {
    loading: false,
    data: []
  }
};

export function beerReducer(state = initialState, action: BeerActions) {
  switch (action.type) {
    case LOAD_BEERLIST:
      return {
        ...state,
        beer: { ...state.beer },
        list: {
          loading: true,
          data: null
        }
      };
    case LOAD_BEERLIST_SUCCESS:
      return {
        ...state,
        beer: { ...state.beer },
        list: {
          loading: false,
          data: action.payload
        }
      };
    case LOAD_BEERLIST_FAIL:
      return {
        ...state,
        list: {
          loading: false,
          data: null
        }
      };
    case LOAD_BEER_DETAILS:
      return {
        ...state,
        beer: {
          loading: true
        }
      };
    case LOAD_BEER_DETAILS_SUCCESS:
      return {
        ...state,
        beer: {
          loading: false,
          data: action.payload as Item
        }
      };
    case LOAD_BEER_DETAILS_FAIL:
      return {
        ...state,
        beer: {
          loading: false
        }
      };
    default:
      return state;
  }
}
