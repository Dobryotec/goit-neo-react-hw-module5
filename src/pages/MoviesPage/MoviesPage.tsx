import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieSearchWord } from '../../api/movies';
import { IMovie } from '../../components/MoviesList/MoviesList.types';
import { MoviesSearchResponse } from './MoviesPage.types';

import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import css from './MoviesPage.module.css';

const MoviesPage: React.FC = () => {
  const [searchMovies, setSearchMovies] = useState<IMovie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const query: string = searchParams.get('query') || '';

  const handleQuery = (newQuery: string) => {
    if (newQuery) {
      searchParams.set('query', newQuery);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('query');
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    const fetchMoviesSearchWord = async () => {
      if (!query) {
        setSearchMovies([]);
        return;
      }
      try {
        setError(false);
        setIsLoading(true);
        const { results }: MoviesSearchResponse = await getMovieSearchWord(query);
        setSearchMovies(results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesSearchWord();
  }, [query]);

  return (
    <>
      <SearchBar handleQuery={handleQuery} />
      {query && !isLoading && !error && searchMovies.length > 0 && (
        <MoviesList movies={searchMovies} />
      )}
      {query && !isLoading && !error && searchMovies.length === 0 && (
        <p className={css['no-results']}>
          No movies found for your query. Please try again with a different keyword.
        </p>
      )}
      {!error && isLoading && <Spinner />}
      {error && !isLoading && <ErrorMessage />}
    </>
  );
};

export default MoviesPage;
