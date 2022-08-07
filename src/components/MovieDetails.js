// сторінка з детальною інформацією про кінофільм

import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useParams } from "react-router-dom";

import { getMovieById } from "services/services";
import { MovieCard } from "./MovieCard";

export const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const {movieId}  = useParams();

  useEffect(() => {
    getMovieById(movieId)
      .then(data => {
      setMovie(data);
    });
    
  }, [movieId]);


  if (!movie) {
    return null;
  }

  console.log(location.state)

  return (
    <>
      <MovieCard movie={movie} />
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link state={location.state} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={location.state} to="reviews">
            Review
          </Link>
        </li>
      </ul>
      <Outlet/>
    </>
  );
};
