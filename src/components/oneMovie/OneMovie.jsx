import PropTypes from "prop-types";
import { ImgTag, Div, InfoContainer } from "./OneMovie.styled";

export function OneMovie({data, children}) {
    return (
        <>
            {data && 
                <Div>
                    <ImgTag 
                        src={(data.poster_path) ? (`https://www.themoviedb.org/t/p/original/${data.poster_path}`) : ("https://i.ibb.co/FB037FW/image.jpg")}
                        alt={data.tagline}>
                    </ImgTag>
                    <InfoContainer>
                        <h3>{data.title} ({data.release_date && (data.release_date.slice(0,4))})</h3>
                        <p>User score:  {Math.round(data.vote_average*10)}%</p>
                        <h4>Overview</h4>
                        <p>{data.overview}</p>
                        <h4>Genres</h4>
                        <ul>
                            {data.genres && data.genres.map(genre => 
                            {return(<li key={genre.name}>{genre.name}</li>)}
                            )}
                        </ul>
                        {children}
                    </InfoContainer>
                </Div>
            }
        </>
    );
};

OneMovie.propTypes = {
    data: PropTypes.shape({
        release_date: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        genres: PropTypes.arrayOf(PropTypes.shape({
            name:PropTypes.string,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })),
    })
};