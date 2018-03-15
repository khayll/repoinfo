export interface IssuesLoadData {
  type: 'ISSUES_LOAD_DATA';
  payload: {};
}

export interface IssuesDataLoaded {
  type: 'ISSUES_DATA_LOADED';
  payload: {};
}

export type IssuesRootAction = IssuesLoadData | IssuesDataLoaded;
