export interface IMatch<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export interface ILocation {
  pathname: string;
  search: string;
  hast: string;
}

export type noAvailableType = 'N/A';
