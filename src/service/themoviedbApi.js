/* const baseUrl = "https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>";
const apiKey = "d31c9faeabd85b83726848cf0b50c5a1";
const baseurl2 = "https://api.themoviedb.org/3/movie/550?api_key=d31c9faeabd85b83726848cf0b50c5a1";
const mostPoularUrl = "/trending/get-trending";
const byKeyWordUrl = "/search/search-movies";
const wholeMovieInformationUrl = "/movies/get-movie-details";
const actorsUrl = "/movies/get-movie-credits";
const viewsUrl = "/movies/get-movie-reviews"; */

class ApiService {
    apiKey = "?api_key=d31c9faeabd85b83726848cf0b50c5a1";
    baseUrl = "https://api.themoviedb.org/3";
    mostPoularUrl = "/trending/movie/day";
    byKeyWordUrl = "/search/search-movies";
    wholeMovieInformationUrl = "/movies/get-movie-details";
    actorsUrl = "/movies/get-movie-credits";
    viewsUrl = "/movies/get-movie-reviews";
 

    async getMostPopularMovies() {
        let movies =[];
        try {
            await fetch(`${this.baseUrl}${this.mostPoularUrl}${this.apiKey}`)
            .then(response => response.json())
            .then(data => {
                movies = data.results;
            });
        } catch(error) {
            console.log(`fetch error: ${error}`)
        };
        return(movies);
    };

};

export const apiService = new ApiService();