import { IMovieItemProps } from './MovieItem.types';

const MovieItem: React.FC<IMovieItemProps> = ({ title, index }) => {
  return (
    <div>
      {index + 1}. {title}
    </div>
  );
};

export default MovieItem;
