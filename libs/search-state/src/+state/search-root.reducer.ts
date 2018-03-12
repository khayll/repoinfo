import {SearchRoot} from './search-root.interfaces';
import {SearchRootAction} from './search-root.actions';
import {searchRootInitialState} from "./search-root.init";

export function searchRootReducer(state: SearchRoot, action: SearchRootAction): SearchRoot {
  switch (action.type) {
    case 'SEARCH_LOAD_DATA': {
      return {...state, loading: true };
    }
    case 'SEARCH_DATA_LOADED': {
      return {...state, ...{loading: false, ...action.payload}};
    }
    case 'SEARCH_CLEAR_DATA': {
      return {...state, ...searchRootInitialState};
    }
    default: {
      return state;
    }
  }
}
