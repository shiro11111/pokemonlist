export interface List {
  count: number;
  next: boolean;
  previous: boolean;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}
