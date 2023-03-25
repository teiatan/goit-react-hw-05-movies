import { Routes, Route } from "react-router-dom";
import { Layout } from "./header/Layout";
import { Movies } from "pages/Movies";
import { Home } from "pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { Reviews } from "./reviews/Reviews";
import { Cast } from "./cast/Cast";
import { NotFound } from "pages/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieID" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
