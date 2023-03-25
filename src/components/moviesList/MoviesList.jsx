import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function MoviesList({title, movies, onClickMovieItem}) {

    const onClick = e => {
        e.preventDefault();
        onClickMovieItem(e.target.id);
    };

    return(
        <>
        <h2>{title}</h2>
        <ul>
            {movies.map(movie => {
                return(
                    <li key={movie.id} id={movie.id} onClick={onClick}>
                        <Link to={`/movies/:${movie.id}`} id={movie.id} /* onClick={onClick} */>{movie.title}</Link>
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