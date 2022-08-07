import { Box } from "./Box";

export const MovieCard = ({ movie }) => {
  const { id,  poster_path, title, name, release_date, vote_average, overview,
    genres, } = movie;
 
  return (
    <>
      <Box key={id}  display='flex' justify-content='space-between'>
        <div>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `http://blog.aspneter.com/Images/no-thumb.jpg`}
            alt={title || name}
            width="300"
        />
        </div>
        <div>
        <h2>{title || name} ({release_date.slice(0,4)})</h2>
          <p>Score: {Math.round((vote_average / 10) * 100)}%</p>
        {overview ?(<><h3>Overview: </h3><p>{overview}</p></>) : <></>}

        <h3>Genres:</h3>
          {genres.map(genre => genre.name).join(', ')}
        </div>
      </Box>
    </>
  )
};