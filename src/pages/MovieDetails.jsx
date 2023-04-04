import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { OneMovie } from "components/oneMovie/OneMovie";
import { AdditionalInfoButtons } from "components/additionalInfoButtons/AdditionalInfoButtons";
import { apiService } from "service/themoviedbApi";
import { Suspense } from "react";
import { Button } from "components/searchBar/SearchBar.styled";

export function MovieDetails({goBackLink}) {

    const [currentMovieInfo, setCurrentMovieInfo] = useState(null);

    const { movieID } = useParams();

    useEffect(()=>{
        apiService.getWholeMovieInformation(movieID).then(
          response => setCurrentMovieInfo(response)
        );
    }, [movieID]);

    const location = useRef(useLocation()); 
    console.log(location.current.state);
    const navigate = useNavigate();

    const goBack = () => {
        console.log(goBackLink);
        //navigate(`location.pathname`);
    };

    return (
        <>
            <OneMovie data={currentMovieInfo}/>
            <AdditionalInfoButtons movieId={movieID}/>
            <Button onClick={goBack}>Go back</Button>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </> 
    );
};
