export function MoviesList({title, movies}) {
    return(
        <>
        <h2>{title}</h2>
        <ul>
            {/* {movies.map(movie => {
                return(
                    <li key={movie.id}>
                        <a href="router">{movie.title}</a>
                    </li>
                )
            })} */}
        </ul>
        </>
    );
};