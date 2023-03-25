import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { OneMovie } from "components/oneMovie/OneMovie";
import { AdditionalInfoButtons } from "components/additionalInfoButtons/AdditionalInfoButtons";
import { apiService } from "service/themoviedbApi";

export function MovieDetails() {

    const [currentMovieInfo, setCurrentMovieInfo] = useState(null);

    const { movieID } = useParams();

    useEffect(()=>{
        apiService.getWholeMovieInformation(movieID).then(
          response => setCurrentMovieInfo(response)
        );
    }, [movieID]);

    return (
        <>
            <OneMovie data={currentMovieInfo}/>
            <AdditionalInfoButtons movieId={movieID}/>
            <Outlet />
        </> 
    );
};
