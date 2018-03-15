import { IssuesRoot } from './issues-root.interfaces';

export const issuesRootInitialState: IssuesRoot = {
  loading: false,
  total_count: 0,
  incomplete_results: false,
  items: []
};
