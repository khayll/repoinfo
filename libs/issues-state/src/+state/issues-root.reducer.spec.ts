import { issuesRootReducer } from './issues-root.reducer';
import { issuesRootInitialState } from './issues-root.init';
import { IssuesRoot } from './issues-root.interfaces';
import { IssuesDataLoaded } from './issues-root.actions';

describe('issuesRootReducer', () => {
  it('should work', () => {
    const state: IssuesRoot = {
      loading: false,
      total_count: 0,
      incomplete_results: false,
      items: []
    };
    const action: IssuesDataLoaded = { type: 'ISSUES_DATA_LOADED', payload: {} };
    const actual = issuesRootReducer(state, action);
    expect(actual).toEqual(state);
  });
});
