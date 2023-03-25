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
  const [reviews, setReviews] = useState(null);
  const [cast, setCast] = useState(null);

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
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>}>
            
          </Route>
          <Route path="/movies/:movieID" element={<MovieDetails getCast={getCast} getReview={getReview}/>}>
            <Route path="/movies/:movieID/cast" element={<Cast actors={cast}/>} />
            <Route path="/movies/:movieID/reviews" element={<Reviews reviews={reviews}/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      
    </>
  );
};
