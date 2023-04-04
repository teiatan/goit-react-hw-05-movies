import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Title, StyledLink } from "./MoviesList.styled";

export function MoviesList({title, movies, goBack}) {

    return(
        <>
            {title && <Title>{title}</Title>}
            <ul>
                {movies.map(movie => {
                    return(
                        <li key={movie.id}>
                            <StyledLink to={`/movies/${movie.id}`} state={{from: goBack}}>{movie.title}</StyledLink>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

MoviesList.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }))
};