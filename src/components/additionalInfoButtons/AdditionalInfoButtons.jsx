import { StyledLink } from "./AdditionalInfoButtons.styled";

export function AdditionalInfoButtons({movieId}) {
    return (
        <ul> Additional information
            <li><StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink></li>
            <li><StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink></li>
        </ul>
    );
};