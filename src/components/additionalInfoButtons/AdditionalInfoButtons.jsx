import { StyledLink, Ul, Li, Div } from "./AdditionalInfoButtons.styled";
  
export function AdditionalInfoButtons() {
    return (
        <Div>
            <h3>Additional information</h3>
            <Ul> 
                <Li><StyledLink to="cast">Cast</StyledLink></Li>
                <Li><StyledLink to="reviews">Reviews</StyledLink></Li>
            </Ul>
        </Div>
        
    );
};