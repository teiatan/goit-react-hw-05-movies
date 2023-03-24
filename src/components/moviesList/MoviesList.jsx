export function MoviesList({title, movies, onClickMovieLink}) {

    const onClick = e => {
        e.preventDefault();
        onClickMovieLink(e.target.id);
    }

    return(
        <>
        <h2>{title}</h2>
        <ul>
            {movies.map(movie => {
                return(
                    <li key={movie.id}>
                        <a href="router" id={movie.id} onClick={onClick}>{movie.title}</a>
                    </li>
                )
            })}
        </ul>
        </>
    );
};