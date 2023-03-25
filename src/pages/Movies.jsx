import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MoviesList } from "components/moviesList/MoviesList";
import { apiService } from "service/themoviedbApi";
import { SearchBar } from "components/searchBar/SearchBar";

export function Movies() {
    const [movies, setMovies] = useState(null);

    const searchMovieByKeyWord = (inputValue) => {
        setMovies(null);
        if (inputValue.trim() === '') {
            Notify.failure(`Search request shouldn't be empty`);
            return;
        };
        apiService.getMoviesByKeyWord(inputValue).then(
            response => {
                if(response.results.length===0) {
                    Notify.failure(`There are no ${inputValue} movies`);
                    return;
                }
                const foundMovies = response.results.map(movie=>{
                    return ({title: movie.name, id: movie.id})
                });
                setMovies(foundMovies);
                console.log(response);
                Notify.success(`${response.total_results} movies are found`);
            }
        );  
    };

    return (
        <>
        <SearchBar handleSearchSubmit={searchMovieByKeyWord}/>
        {movies && <MoviesList movies={movies}/>}
        </>
    );
};
