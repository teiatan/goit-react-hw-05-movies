import { useState, useEffect } from "react";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { MoviesList } from "components/moviesList/MoviesList";
import { OneMovie } from "components/oneMovie/OneMovie";
import { AdditionalInfoButtons } from "./additionalInfoButtons/AdditionalInfoButtons";
import { Reviews } from "./reviews/Reviews";
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
        return({name: actor.name, character: actor.character, id: actor.id, photo: `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${actor.profile_path}`})
      })
      setCast(actors); 
    })
  };

  console.log(cast);

  const getMovieReview = () => {
    apiService.getMovieReviews(currentMovieId)
    .then(response => {
      const reviewsData = response.results.map(review => {return({author: review.author, review: review.content, id: review.id})})
      setReviews(reviewsData);
    })
  };

  return (
    <>
      <Header changeCurrentPage={changeCurrentPage}/>
      <Main currentPage={currentPage} movies={movies}>
        {!currentMovieId && <MoviesList title="Trending today" movies={movies} onClickMovieLink={takeCurrentMovieIdByClickOnLink}/>}
        {currentMovieId && currentMovieInfo && <OneMovie id={currentMovieId} data={currentMovieInfo}/>}
        {currentMovieId && <AdditionalInfoButtons onClickCast={getMovieCast} onClickReview={getMovieReview}/>}
        {reviews && <Reviews reviews={reviews}/>}
      </Main>
    </>
  );
};
