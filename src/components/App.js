
import { GlobalStyle } from './GlobalStyles';
import {NavBar} from './NavBar';
import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from './MovieDetails';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
// import { NotFound } from '../pages/NotFound';
import { lazy } from 'react';

// if named export
const Movies = lazy(() => import('../pages/Movies.js').then(module => ({
  ...module,
  default: module.Movies
})));

const NotFound = lazy(() => import('../pages/NotFound.js'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />} >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews/>} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <GlobalStyle />
    </>

  );
};
