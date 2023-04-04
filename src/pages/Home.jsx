import { useState, useEffect } from "react";
import { MoviesList } from "components/moviesList/MoviesList";
import { apiService } from "service/themoviedbApi";

export function Home() {
    
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        apiService.getMostPopularMovies().then(
          response => setMovies(response)
        );    
      }, []);

    return (
        <MoviesList title="Trending today" movies={movies} goBack={'/'}/>
    );
};