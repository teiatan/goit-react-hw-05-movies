import { useState, useEffect } from "react";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { MoviesList } from "components/moviesList/MoviesList";
import { OneMovie } from "components/moviesList/oneMovie/OneMovie";
import { apiService } from "service/themoviedbApi";


export const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    apiService.getMostPopularMovies().then(
      response => setMovies(response)
    );    
  }, []);

  const changeCurrentPage = (pageName) => {
    setCurrentPage(pageName);
  };

  console.log(movies);
  
  return (
    <>
      <Header changeCurrentPage={changeCurrentPage}/>
      <Main currentPage={currentPage} movies={movies}>
        <MoviesList title="Trending today" movies={movies}/>
        <OneMovie />
      </Main>
    </>
  );
};
