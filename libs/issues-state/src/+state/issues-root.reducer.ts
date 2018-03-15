import { IssuesRoot } from './issues-root.interfaces';
import { IssuesRootAction } from './issues-root.actions';

export function issuesRootReducer(state: IssuesRoot, action: IssuesRootAction): IssuesRoot {
  switch (action.type) {
    case 'ISSUES_DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
