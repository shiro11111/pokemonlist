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


export interface BeerState {
  beer: Item;
  list: Item[];

}

const initialState: BeerState = {
  beer: null,
  list: []
};

export function beerReducer(state = initialState, action: BeerActions) {
  switch (action.type) {
    case LOAD_BEERLIST:
      return {
        ...state,
        beer: { ...state.beer },
        list: [ ...state.list ]
      };
    case LOAD_BEERLIST_SUCCESS:
      return {
        ...state,
        beer: { ...state.beer },
        list: action.payload
      };
    case LOAD_BEERLIST_FAIL:
      return {
        ...state
      };
    case LOAD_BEER_DETAILS:
      return {
        ...state,
      };
    case LOAD_BEER_DETAILS_SUCCESS:
      return {
        ...state,
        beer: action.payload as Item
      };
    case LOAD_BEER_DETAILS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
