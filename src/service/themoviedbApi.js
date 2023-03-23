/* const baseUrl = "https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>";
const apiKey = "d31c9faeabd85b83726848cf0b50c5a1";
const baseurl2 = "https://api.themoviedb.org/3/movie/550?api_key=d31c9faeabd85b83726848cf0b50c5a1";
const mostPoularUrl = "/trending/get-trending";
const byKeyWordUrl = "/search/search-movies";
const wholeMovieInformationUrl = "/movies/get-movie-details";
const actorsUrl = "/movies/get-movie-credits";
const viewsUrl = "/movies/get-movie-reviews"; */

class ApiService {
    apiKey = "d31c9faeabd85b83726848cf0b50c5a1";
    baseUrl = "https://api.themoviedb.org/3/movie/550?api_key=";
    mostPoularUrl = "/trending/get-trending";
    byKeyWordUrl = "/search/search-movies";
    wholeMovieInformationUrl = "/movies/get-movie-details";
    actorsUrl = "/movies/get-movie-credits";
    viewsUrl = "/movies/get-movie-reviews";
 

    async getMostPopularMovies() {
        const response = await fetch(`${this.baseUrl}${this.apiKey}${this.mostPoularUrl}`);
        console.log(response);
    };

};

export const apiService = new ApiService();