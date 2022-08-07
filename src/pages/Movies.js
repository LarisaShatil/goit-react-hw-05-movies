// import SearchForm from "components/SearchForm";
import SearchForm from "components/SearchForm";
import { Outlet, useParams } from "react-router-dom";


export const Movies = () => {
  const { movieId } = useParams();

  return (
    <>
      {movieId ? <></> : <SearchForm/>}
      <Outlet/>
    </>
  )
};