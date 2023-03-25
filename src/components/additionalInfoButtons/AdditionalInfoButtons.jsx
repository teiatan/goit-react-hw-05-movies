import { StyledLink } from "./AdditionalInfoButtons.styled";

export function AdditionalInfoButtons({onClickCast, onClickReview, movieId}) {

    const onClick = e => {
        e.preventDefault();
        switch(e.target.id){
            case "cast":
                onClickCast();
                break;
            case "reviews":
                onClickReview();
                break;
            default:
                return;
        };
    };


    return (
        <ul onClick={onClick}> Additional information
            <li><StyledLink to={`/movies/${movieId}/cast`} id="cast"/* href="asd"  onClick={onClick} */>Cast</StyledLink></li>
            <li><StyledLink to={`/movies/${movieId}/reviews`} id="reviews"/* href="asd"  onClick={onClick} */>Reviews</StyledLink></li>
        </ul>
    );
};