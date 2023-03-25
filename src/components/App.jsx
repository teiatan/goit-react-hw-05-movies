import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./header/Layout";
import { NotFound } from "pages/NotFound";

const Home = lazy(() => 
  import('../pages/Home').then(module => ({
      ...module,
      default: module.Home,
  }))
);

const Movies = lazy(() => 
  import('../pages/Movies').then(module => ({
      ...module,
      default: module.Movies,
  }))
);

const MovieDetails = lazy(() => 
  import('../pages/MovieDetails').then(module => ({
      ...module,
      default: module.MovieDetails,
  }))
);

const Reviews = lazy(() => 
  import('./reviews/Reviews').then(module => ({
      ...module,
      default: module.Reviews,
  }))
);

const Cast = lazy(() => 
  import('./cast/Cast').then(module => ({
      ...module,
      default: module.Cast,
  }))
);

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
