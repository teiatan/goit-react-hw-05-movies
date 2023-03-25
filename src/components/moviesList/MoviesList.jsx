import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function MoviesList({title, movies}) {

    return(
        <>
        <h2>{title}</h2>
        <ul>
            {movies.map(movie => {
                return(
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                )
            })}
        </ul>
        </>
    );
};

MoviesList.propTypes = {
    onClickMovieItem: PropTypes.func,
};