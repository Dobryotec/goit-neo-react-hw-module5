import { useEffect, useState } from 'react';

import MoviesList from '../../components/MoviesList/MoviesList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';

import { getPopularMoviesOfTheDay } from '../../api/movies';
import { IMovie } from '../../components/MoviesList/MoviesList.types';
import { MoviesSearchResponse } from '../MoviesPage/MoviesPage.types';

import css from './HomePage.module.css';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results }: MoviesSearchResponse = await getPopularMoviesOfTheDay();
        setMovies(results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {isLoading && !error && <Spinner />}
      {movies.length > 0 && !error && !isLoading && (
        <>
          <h1 className={css.title}>Trending today:</h1>
          <MoviesList movies={movies} />
        </>
      )}
      {error && !isLoading && <ErrorMessage />}
    </>
  );
};

export default HomePage;
