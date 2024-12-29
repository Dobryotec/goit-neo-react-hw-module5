import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../api/movies';
import { IMovieReviews } from './MoviReviews.types';

import MovieReviewItem from '../MovieReviewItem/MovieReviewItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';

import css from './MovieReviews.module.css';

const MovieReviews: React.FC = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState<IMovieReviews[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      if (!movieId) return;
      try {
        setIsLoading(true);
        setError(false);
        const { results }: IMovieReviews = await getMovieReviews(movieId);
        setReviews(results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {!error && reviews.length > 0 && !isLoading ? (
        <ul className={css['details-reviews']}>
          {reviews.map(({ author, id, content }) => (
            <li className={css['details-item']} key={id}>
              <MovieReviewItem author={author} description={content} />
            </li>
          ))}
        </ul>
      ) : (
        !error &&
        !isLoading && <p className={css['no-reviews']}>We don`t have any reviews for this movie.</p>
      )}
      {error && !isLoading && <ErrorMessage />}
      {!error && isLoading && <Spinner />}
    </>
  );
};

export default MovieReviews;
