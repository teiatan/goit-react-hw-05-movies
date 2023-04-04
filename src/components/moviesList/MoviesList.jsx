import PropTypes from "prop-types";
import { Title, StyledLink, Ul, Li, Div, Img } from "./MoviesList.styled";

export function MoviesList({title, movies, goBack}) {
    //console.log(movies);
    return(
        <>
            {title && <Title>{title}</Title>}
            <Ul>
                {movies.map(movie => {
                    return(
                        <Li key={movie.id}>
                            <StyledLink to={`/movies/${movie.id}`} state={{from: goBack}}>
                                <Img src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`} alt={movie.title}></Img>
                                <Div>
                                    <h3>{movie.title}</h3>
                                    <p>{movie.release_date}</p>
                                </Div>
                            </StyledLink>
                        </Li>
                    )
                })}
            </Ul>
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