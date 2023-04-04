import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { OneMovie } from "components/oneMovie/OneMovie";
import { AdditionalInfoButtons } from "components/additionalInfoButtons/AdditionalInfoButtons";
import { apiService } from "service/themoviedbApi";
import { Suspense } from "react";
import { GoBackButton } from "components/searchBar/SearchBar.styled";

export function MovieDetails() {

    const [currentMovieInfo, setCurrentMovieInfo] = useState(null);

    const { movieID } = useParams();

    useEffect(()=>{
        apiService.getWholeMovieInformation(movieID).then(
          response => setCurrentMovieInfo(response)
        );
    }, [movieID]);

    const navigate = useNavigate();
    const location = useRef(useLocation()); 
    const goBackLink = location.current?.state?.from || null;

    const goBack = () => {
        navigate(goBackLink);
    };

    return (
        <>
            {goBackLink && <GoBackButton onClick={goBack}>⮰ Go back to movie list</GoBackButton>}
            <OneMovie data={currentMovieInfo}>
                <AdditionalInfoButtons movieId={movieID}/>
            </OneMovie>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </> 
    );
};
