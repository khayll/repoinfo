import { searchRootReducer } from './search-root.reducer';
import { searchRootInitialState } from './search-root.init';
import { SearchRoot } from './search-root.interfaces';
import { SearchDataLoaded } from './search-root.actions';
import { Repository, UserType } from '@repoinfo/data-model';

describe('searchRootReducer', () => {
  it('should work', () => {
    const state: SearchRoot = { query: '', loading: false, total_count: 0, incomplete_results: false, items: [] };
    const sampleItem: Repository = {
      id: 211,
      name: 'test name',
      html_url: 'https://some.url.com/repository',
      owner: {
        id: 3213,
        login: 'testlogin',
        avatar_url: 'https://some.url.com/avatar',
        html_url: 'https://some.url.com/user',
        type: UserType.USER
      },
      description: 'test description',
      stargazers_count: 13,
      forks_count: 4,
      open_issues_count: 9,
      license: {
        key: 'license-1',
        name: 'License 1',
        url: 'https://some.url.com/license-1'
      },
      watchers: 8,
      issues_url: 'https://some.url.com/issues/211',
      created_at: '2017-12-26T18:15:56Z',
      updated_at: '2018-02-20T13:21:04Z',
      homepage: 'https://some.homepage.com'
    };
    const action: SearchDataLoaded = {
      type: 'SEARCH_DATA_LOADED',
      payload: { total_count: 12, incomplete_results: false, items: [sampleItem] }
    };
    const actual = searchRootReducer(state, action);
    expect(actual).toEqual({
      query: '',
      loading: false,
      total_count: 12,
      incomplete_results: false,
      items: [sampleItem]
    });
  });
});
