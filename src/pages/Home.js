import { Box } from 'components/Box';
import { MovieList } from 'components/MovieList';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getTrendingMovies } from 'services/services';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <>
      <Box pt="10px" pb="10px">
        <h3>Trending today</h3>
        <MovieList movies={trendingMovies} />
      </Box>

      <Outlet />
    </>
  );
};
