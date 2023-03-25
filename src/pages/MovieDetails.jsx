import { useState, useEffect } from "react";
import { OneMovie } from "components/oneMovie/OneMovie";
import { AdditionalInfoButtons } from "components/additionalInfoButtons/AdditionalInfoButtons";
import { apiService } from "service/themoviedbApi";

export function MovieDetails({movieId, getCast, getReview}) {

    const [currentMovieInfo, setCurrentMovieInfo] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [cast, setCast] = useState(null);

    useEffect(()=>{
        apiService.getWholeMovieInformation(movieId).then(
          response => setCurrentMovieInfo(response)
        );
      }, [movieId]);

      const getMovieCast = () => {
        apiService.getMovieActors(movieId)
        .then( response => {
          const actors = response.cast.map(actor => {
            return({name: actor.name, character: actor.character, id: actor.id, photo: `https://www.themoviedb.org/t/p/original/${actor.profile_path}`})
          })
          setCast(actors);
          getCast(cast);
        })
      };
    
      const getMovieReview = () => {
        apiService.getMovieReviews(movieId)
        .then(response => {
          const reviewsData = response.results.map(review => {return({author: review.author, review: review.content, id: review.id})})
          setReviews(reviewsData);
          getReview(reviews);
        })
      };

    return (
        <>
            <OneMovie data={currentMovieInfo}/>
            <AdditionalInfoButtons movieId={movieId} onClickCast={getMovieCast} onClickReview={getMovieReview}/>
        </> 
    );
};
