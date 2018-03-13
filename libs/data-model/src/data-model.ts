

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  owner: User;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  license: License;
  watchers: number;
  issues_url: string;
  created_at: string;
  updated_at: string;
  homepage: string;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: UserType;
}

export interface License {
  key: string;
  name: string;
  url: string;
}

export interface Issue {
  id: number;
  number: number;
  title: string;
  state: IssueState;
  body: string;
  user: User;
  html_url: string;
  comments: number;
}

export enum IssueState {
  OPEN = "open",
  CLOSED = "closed"
}

export enum UserType {
  ORGANIZATION = "Organization",
  USER = "User"
}
