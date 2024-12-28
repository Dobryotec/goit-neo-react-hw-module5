import clsx from 'clsx';

import { NavLink, NavLinkProps } from 'react-router-dom';

import css from './Navigation.module.css';

const Navigation: React.FC = () => {
  const getActiveClass: NavLinkProps['className'] = ({ isActive }) =>
    clsx(css.link, { [css.active]: isActive });
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getActiveClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getActiveClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
