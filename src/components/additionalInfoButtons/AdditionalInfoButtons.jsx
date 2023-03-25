import { StyledLink } from "./AdditionalInfoButtons.styled";
  
export function AdditionalInfoButtons() {
    return (
        <ul> Additional information
            <li><StyledLink to="cast">Cast</StyledLink></li>
            <li><StyledLink to="reviews">Reviews</StyledLink></li>
        </ul>
    );
};