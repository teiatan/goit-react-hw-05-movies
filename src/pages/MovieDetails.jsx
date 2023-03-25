import { useState, useEffect } from "react";
import { OneMovie } from "components/oneMovie/OneMovie";
import { AdditionalInfoButtons } from "components/additionalInfoButtons/AdditionalInfoButtons";
import { apiService } from "service/themoviedbApi";

export function MovieDetails({movieId}) {

    const [currentMovieInfo, setCurrentMovieInfo] = useState(null);

    useEffect(()=>{
        apiService.getWholeMovieInformation(movieId).then(
          response => setCurrentMovieInfo(response)
        );
      }, [movieId]);

    return (
        <>
            <OneMovie data={currentMovieInfo}/>
            <AdditionalInfoButtons /* onClickCast={getMovieCast} onClickReview={getMovieReview} *//>
        </> 
    );
};
