interface IGenres {
  id: number;
  name: string;
}

export interface IMovieDetails {
  title: string;
  overview: string;
  poster_path: string;
  genres: IGenres[];
  vote_average: number;
}
