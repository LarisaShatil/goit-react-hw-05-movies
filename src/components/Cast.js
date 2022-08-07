//інформація про акторський склад. Рендериться на сторінці MovieDetails

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getCastInfo } from "services/services";

import styled from 'styled-components';

const List = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const PhotoItem = styled.img`
  padding-top:30px;
  width: 200px;
`;

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  
  useEffect(() => {
    getCastInfo(movieId)
      .then(data => {
        setCast(data);
      });
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <>
  
      <List>
        {cast.map(actor =>
          <li key={actor.id}>
            <PhotoItem
              src={actor.profile_path ?
                `https://image.tmdb.org/t/p/w500${actor.profile_path}` : `http://blog.aspneter.com/Images/no-thumb.jpg`}
              alt={actor.name}></PhotoItem>
            <h4>{actor.name}</h4>
          </li>)}
      </List>
    </>
  )
};

export default Cast;