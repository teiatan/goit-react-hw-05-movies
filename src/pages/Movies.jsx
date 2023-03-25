import { useState, useEffect } from "react";
//import { MoviesList } from "components/moviesList/MoviesList";
import { apiService } from "service/themoviedbApi";
import { SearchBar } from "components/searchBar/SearchBar";

export function Movies() {
    const [searchInput, setSearchInput] = useState(null);
    const [movies, setMovies] = useState([]);

    const searchMovieByKeyWord = (inputValue) => {
        apiService.getMoviesByKeyWord(inputValue).then(
            response => setMovies(response)
        );  
    };

    return (
        <>
        {!searchInput && <SearchBar handleSearchSubmit={searchMovieByKeyWord}/>}
        
        </>
    );
};
