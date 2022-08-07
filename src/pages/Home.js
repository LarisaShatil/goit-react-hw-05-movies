import { MovieList } from "components/MovieList";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getTrendingMovies } from "services/services";

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <>
      <h3>Trending today</h3>
      <MovieList movies={trendingMovies} />
      <Outlet/>
    </>
  )
};