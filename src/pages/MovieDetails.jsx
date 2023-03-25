import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { OneMovie } from "components/oneMovie/OneMovie";
import { AdditionalInfoButtons } from "components/additionalInfoButtons/AdditionalInfoButtons";
import { apiService } from "service/themoviedbApi";

export function MovieDetails() {

    const [currentMovieInfo, setCurrentMovieInfo] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [cast, setCast] = useState(null);

    const { movieID } = useParams();

    useEffect(()=>{
        apiService.getWholeMovieInformation(movieID).then(
          response => setCurrentMovieInfo(response)
        );
      }, [movieID]);

      const getMovieCast = () => {
        apiService.getMovieActors(movieID)
        .then( response => {
          const actors = response.cast.map(actor => {
            return({name: actor.name, character: actor.character, id: actor.id, photo: `https://www.themoviedb.org/t/p/original/${actor.profile_path}`})
          })
          setCast(actors);
        })
      };
    
      const getMovieReview = () => {
        apiService.getMovieReviews(movieID)
        .then(response => {
          const reviewsData = response.results.map(review => {return({author: review.author, review: review.content, id: review.id})})
          setReviews(reviewsData);
        })
      };

    return (
        <>
            <OneMovie data={currentMovieInfo}/>
            <AdditionalInfoButtons movieId={movieID} onClickCast={getMovieCast} onClickReview={getMovieReview}/>
        </> 
    );
};
