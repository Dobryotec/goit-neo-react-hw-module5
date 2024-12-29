export interface IMovieCast {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface IMovieCastResponse {
  cast: IMovieCast[];
}
