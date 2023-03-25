import { useState, useEffect } from "react";
//import { MoviesList } from "components/moviesList/MoviesList";
//import { apiService } from "service/themoviedbApi";
import { SearchBar } from "components/searchBar/SearchBar";

export function Movies() {
    const [searchInput, setSearchInput] = useState(null);




    return (
        <>
        {!searchInput && <SearchBar />}
        
        </>
    );
};
