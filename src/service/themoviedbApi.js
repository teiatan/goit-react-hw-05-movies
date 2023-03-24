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
    baseUrl = "https://api.themoviedb.org/3";
    mostPoularUrl = "/trending/movie/day";
    byKeyWordUrl = "/search/company";
    wholeMovieInformationUrl = "/movie/";
    actorsUrl = "/movies/get-movie-credits";
    viewsUrl = "/movie/get-movie-reviews";
 

    async getMostPopularMovies() {
        let movies =[];
        try {
            await fetch(`${this.baseUrl}${this.mostPoularUrl}?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => {
                movies = data.results;
            });
        } catch(error) {
            console.log(`fetch error: ${error}`)
        };
        return(movies);
    };

    async getMoviesByKeyWord(keyWord) {
        let movies =[];
        try {
            await fetch(`${this.baseUrl}${this.byKeyWordUrl}?api_key=${this.apiKey}&query=${keyWord}`)
            .then(response => response.json())
            .then(data => {
                movies = data.results.map(movie=>{
                    return ({title: movie.name, id: movie.id})
                });
            });
        } catch(error) {
            console.log(`fetch error: ${error}`)
        };
        return(movies);
    };

    async getWholeMovieInformation(id) {
        let movieInfo = null;
        try {
            await fetch(`${this.baseUrl}${this.wholeMovieInformationUrl}${id}?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => movieInfo=data)

        } catch(error) {
            console.log(error)
        }
        return (movieInfo);
    };

    async getMovieCast(id) {
        let movieCast = null;
        try {
            await fetch(`${this.baseUrl}${this.wholeMovieInformationUrl}${id}?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => movieCast=data)

        } catch(error) {
            console.log(error)
        }
        return (movieCast);
    };

    async getMovieReviews(id) {
        let movieReviews = null;
        try {
            await fetch(`${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => movieReviews=data)

        } catch(error) {
            console.log(error)
        }
        return (movieReviews);
    };
};

export const apiService = new ApiService();