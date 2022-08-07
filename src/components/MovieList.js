import { NavLink, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const MovieItem = styled.li`
  margin-top:10px;
  color: violet;
  :hover{
    color:red;
  }
`;

export const MovieList = ({ movies }) => {
   const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({id, title, name}) => {
          return (<MovieItem key={id}>
            <NavLink
              key={id}
              to={`/movies/${id}`}
              // to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title ? title : name}
            </NavLink>
          </MovieItem>)
        })}
      </ul>
      <Outlet/>
    </>
  )
};