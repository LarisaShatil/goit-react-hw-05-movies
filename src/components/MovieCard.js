import { Box } from "./Box";

export const MovieCard = ({ movie }) => {
  const { poster_path, title, name, release_date, vote_average,
     genres, } = movie;
 
  return (
    <>
      <Box display='flex' justify-content='space-between'>
        <div>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `http://blog.aspneter.com/Images/no-thumb.jpg`}
          alt={title || name}
        />
        </div>
        <div>
        <h2>{title || name} ({release_date})</h2>
        <p>Score: {Math.round((vote_average / 10) * 100)}%</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </Box>
    </>
  )
};