import { IMovieReviewItemProps } from './MovieReviewItem.types';

import css from './MovieReviewItem.module.css';

const MovieReviewItem: React.FC<IMovieReviewItemProps> = ({ author, description }) => {
  return (
    <>
      <p className={css['review-author']}>{author}</p>
      <p className={css['review-description']}>{description}</p>
    </>
  );
};

export default MovieReviewItem;
