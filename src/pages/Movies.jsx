import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MoviesList } from "components/moviesList/MoviesList";
import { apiService } from "service/themoviedbApi";
import { SearchBar } from "components/searchBar/SearchBar";

export function Movies() {
    const [movies, setMovies] = useState(null);
    const [emptySearch, setEmptySearch] = useState(false);
    const [emptyRequest, setemptyRequest] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || "";

    useEffect(()=>{
        if (query.trim() === '') {
            return;
        };
        apiService.getMoviesByKeyWord(query).then(
            response => {
                if(response.results.length===0) {
                    setemptyRequest(true);
                    setEmptySearch(false);
                    Notify.failure(`There are no ${query} movies`);
                    return;
                };
                const foundMovies = response.results;
                setMovies(foundMovies);
                setEmptySearch(false);
                setemptyRequest(false);
                Notify.success(`${response.total_results} movies are found`);
            }
        );
    }, [query]);

    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    };

    const searchMovieByKeyWord = (inputValue) => {
        setMovies(null);
        setemptyRequest(false);
        updateQueryString(inputValue);
        if (inputValue.trim() === '') {
            setEmptySearch(true);
            Notify.failure(`Search request shouldn't be empty`);
        };
    };

    return (
        <>
            <SearchBar handleSearchSubmit={searchMovieByKeyWord}/>
            {emptySearch && <p>Search request shouldn't be empty</p>}
            {emptyRequest && <p>There are no ${query} movies</p>}
            {movies && <MoviesList movies={movies} goBack={`/movies?query=${query}`}/>}
        </>
    );
};
