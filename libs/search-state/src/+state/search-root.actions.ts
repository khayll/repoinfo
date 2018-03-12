export interface SearchLoadData {
  type: 'SEARCH_LOAD_DATA';
  payload: {};
}

export interface SearchDataLoaded {
  type: 'SEARCH_DATA_LOADED';
  payload: {};
}

export interface SearchClearData {
  type: 'SEARCH_CLEAR_DATA';
}

export type SearchRootAction = SearchLoadData | SearchDataLoaded | SearchClearData;

