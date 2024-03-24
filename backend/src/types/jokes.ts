export type JokesReponse = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  categories: string[];
  created_at: string;
  updated_at: string;
};

export type SearchJokeResponse = {
  total: number;
  result: JokesReponse[];
};