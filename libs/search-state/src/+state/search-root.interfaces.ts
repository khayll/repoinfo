import {Repository} from "@repoinfo/data-model";

export interface SearchRoot {
  query: string;
  loading: boolean;
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}

export interface SearchRootState {
  readonly searchRoot: SearchRoot;
}
