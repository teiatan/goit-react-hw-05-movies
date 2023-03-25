import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./header/Layout";
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
      
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="movies" element={<Movies/>} />
              <Route path="movies/:movieID" element={<MovieDetails getCast={getCast} getReview={getReview}/>}>
                <Route path="cast" element={<Cast actors={cast}/>} />
                <Route path="reviews" element={<Reviews reviews={reviews}/>} />
              </Route>
              <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      
      
    </>
  );
};
