import {SearchRoot} from './search-root.interfaces';

export const searchRootInitialState: SearchRoot = {
  query: '',
  loading: false,
  total_count: 0,
  incomplete_results: false,
  items: []
};
