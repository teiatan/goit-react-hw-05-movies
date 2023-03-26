import { useEffect, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MoviesList } from "components/moviesList/MoviesList";
import { apiService } from "service/themoviedbApi";
import { SearchBar } from "components/searchBar/SearchBar";

export function Movies() {
    const [movies, setMovies] = useState(null);
    const [search, setSearch] = useState("");
    const [emptySearch, setEmptySearch] = useState(false);
    const [emptyRequest, setemptyRequest] = useState(false);

    useEffect(()=>{
        if (search.trim() === '') {
            return;
        };
        apiService.getMoviesByKeyWord(search).then(
            response => {
                if(response.results.length===0) {
                    setemptyRequest(true);
                    setEmptySearch(false);
                    Notify.failure(`There are no ${search} movies`);
                    return;
                };
                const foundMovies = response.results.map(movie => {
                    return ({title: movie.name, id: movie.id})
                });
                setMovies(foundMovies);
                setEmptySearch(false);
                setemptyRequest(false);
                Notify.success(`${response.total_results} movies are found`);
            }
        );
    }, [search]);

    const searchMovieByKeyWord = (inputValue) => {
        setMovies(null);
        setSearch(inputValue);
        setemptyRequest(false);
        if (inputValue.trim() === '') {
            setEmptySearch(true);
            Notify.failure(`Search request shouldn't be empty`);
        };
    };

    return (
        <>
            <SearchBar handleSearchSubmit={searchMovieByKeyWord}/>
            {emptySearch && <p>Search request shouldn't be empty</p>}
            {emptyRequest && <p>There are no ${search} movies</p>}
            {movies && <MoviesList movies={movies}/>}
        </>
    );
};
