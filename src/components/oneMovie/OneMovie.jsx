export function OneMovie({data}) {
    return (
        <>
            {data && 
                <>
                    <img 
                        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.poster_path}`}
                        alt={data.tagline}>
                    </img>
                    <h3>{data.title} ({data.release_date.slice(0,4)})</h3>
                    <p>User score: {data.vote_average*10}%</p>
                    <h4>Overview</h4>
                    <p>{data.overview}</p>
                    <h4>Genres</h4>
                    <ul>
                        {data.genres.map(genre => 
                        {return(<li key={genre.name}>{genre.name}</li>)}
                        )}
                    </ul>
                </>
            }
        </>
    );
};