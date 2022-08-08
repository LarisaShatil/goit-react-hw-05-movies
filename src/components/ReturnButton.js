import { NavLink, useLocation } from 'react-router-dom';

export const ReturnButton = () => {
  const location = useLocation();

  return (
    <NavLink
      to={location?.state?.from ?? '/goit-react-hw-05-movies/'}
      type="button"
    >
      ⬅ Return back
    </NavLink>
  );
};
