import { StyledLink } from "./AdditionalInfoButtons.styled";
import { useParams } from "react-router-dom";
    
export function AdditionalInfoButtons() {
    return (
        <ul> Additional information
            <li><StyledLink to="cast">Cast</StyledLink></li>
            <li><StyledLink to="reviews">Reviews</StyledLink></li>
        </ul>
    );
};