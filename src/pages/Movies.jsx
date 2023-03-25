import { useState, useEffect } from "react";
//import { MoviesList } from "components/moviesList/MoviesList";
import { apiService } from "service/themoviedbApi";
import { SearchBar } from "components/searchBar/SearchBar";
import { MoviesList } from "components/moviesList/MoviesList";

export function Movies() {
    const [searchInput, setSearchInput] = useState(null);
    const [movies, setMovies] = useState(null);

    const searchMovieByKeyWord = (inputValue) => {
        apiService.getMoviesByKeyWord(inputValue).then(
            response => setMovies(response)
        );  
    };

    return (
        <>
        {!searchInput && <SearchBar handleSearchSubmit={searchMovieByKeyWord}/>}
        {movies && <MoviesList movies={movies}/>}
        </>
    );
};
