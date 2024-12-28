import { Link } from 'react-router-dom';

import css from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className={css['not-found-wrapper']}>
      <div className={css['not-found-header-block']}>
        <span className={css['not-found-text']}>4</span>
        <img src="../../public/plaint.png" alt="Plane" className={css['plaint-img']} />
        <span className={css['not-found-text']}>4</span>
        <img src="../../public/bird.png" alt="Bird" className={css['bird-img']} />
      </div>

      <div className={css['not-found-footer-block']}>
        <h1 className={css['not-found-title']}>Oops! Sorry...</h1>
        <p className={css['not-found-description']}>Page not found</p>
        <button className={css['not-found-button']}>
          <Link to={'/'} className={css['not-found-link']}>
            Back home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;