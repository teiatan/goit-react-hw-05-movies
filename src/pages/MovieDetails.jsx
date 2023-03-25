import { useState, useEffect } from "react";
import { OneMovie } from "components/oneMovie/OneMovie";
import { AdditionalInfoButtons } from "components/additionalInfoButtons/AdditionalInfoButtons";
import { apiService } from "service/themoviedbApi";

export function MovieDetails() {

    const [currentMovieId, setCurrentMovieId] = useState(null);
    const [currentMovieInfo, setCurrentMovieInfo] = useState(null);

    useEffect(()=>{
        if(!currentMovieId) {
          return;
        };
        apiService.getWholeMovieInformation(currentMovieId).then(
          response => setCurrentMovieInfo(response)
        );
      }, [currentMovieId]);

    return (
        <>
            <OneMovie id={currentMovieId} data={currentMovieInfo}/>
            <AdditionalInfoButtons /* onClickCast={getMovieCast} onClickReview={getMovieReview} *//>
        </> 
    );
};
