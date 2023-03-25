import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Movies } from "pages/Movies";
import { Home } from "pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { Reviews } from "./reviews/Reviews";
import { Cast } from "./cast/Cast";
import { NotFound } from "pages/NotFound";




export const App = () => {
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [cast, setCast] = useState(null);

  const onClickMovieItem = (id) => {
    setCurrentMovieId(id);
  };

  const getCast = (data) => {
    setCast(data);
  };

  const getReview = (data) => {
    setReviews(data);
  }

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home onClickMovieItem={onClickMovieItem} />} />
          <Route path="/movies" element={<Movies onClickMovieItem={onClickMovieItem}/>}>
            
          </Route>
          <Route path="/movies/:movieID" element={<MovieDetails movieId={currentMovieId} getCast={getCast} getReview={getReview}/>}>
            <Route path="/movies/:movieID/cast" element={<Cast actors={cast}/>} />
            <Route path="/movies/:movieID/reviews" element={<Reviews reviews={reviews}/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      
    </>
  );
};
