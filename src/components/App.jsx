import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Movies } from "pages/Movies";
import { Home } from "pages/Home";
import { MoviesList } from "components/moviesList/MoviesList";
import { OneMovie } from "components/oneMovie/OneMovie";
import { AdditionalInfoButtons } from "./additionalInfoButtons/AdditionalInfoButtons";
import { Reviews } from "./reviews/Reviews";
import { Cast } from "./cast/Cast";
import { apiService } from "service/themoviedbApi";


export const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [movies, setMovies] = useState([]);
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [currentMovieInfo, setCurrentMovieInfo] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(()=>{
    apiService.getMostPopularMovies().then(
      response => setMovies(response)
    );    
  }, []);

  useEffect(()=>{
    if(!currentMovieId) {
      return;
    };
    apiService.getWholeMovieInformation(currentMovieId).then(
      response => setCurrentMovieInfo(response)
    );
  }, [currentMovieId]);

  const changeCurrentPage = (pageName) => {
    setCurrentPage(pageName);
  };

  const takeCurrentMovieIdByClickOnLink = (id) => {
    setCurrentMovieId(id);
  };

  const getMovieCast = () => {
    apiService.getMovieActors(currentMovieId)
    .then( response => {
      const actors = response.cast.map(actor => {
        return({name: actor.name, character: actor.character, id: actor.id, photo: `https://www.themoviedb.org/t/p/original/${actor.profile_path}`})
      })
      setCast(actors);
      setReviews(null);
    })
  };

  const getMovieReview = () => {
    apiService.getMovieReviews(currentMovieId)
    .then(response => {
      const reviewsData = response.results.map(review => {return({author: review.author, review: review.content, id: review.id})})
      setReviews(reviewsData);
      setCast(null); 
    })
  };

  return (
    <>
      <Header changeCurrentPage={changeCurrentPage}/>
      <Main currentPage={currentPage} movies={movies}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Movies />} />
      </Routes>
        {/* {!currentMovieId && <MoviesList title="Trending today" movies={movies} onClickMovieLink={takeCurrentMovieIdByClickOnLink}/>}
        {currentMovieId && currentMovieInfo && <OneMovie id={currentMovieId} data={currentMovieInfo}/>}
        {currentMovieId && <AdditionalInfoButtons onClickCast={getMovieCast} onClickReview={getMovieReview}/>}
        {reviews && <Reviews reviews={reviews}/>}
        {cast && <Cast actors={cast}/>} */}
      </Main>
    </>
  );
};
