import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "service/themoviedbApi";
import { Img, Ul, Li, H3 } from "./Cast.styled";

export function Cast () {
    const [cast, setCast] = useState([]);
    const { movieID } = useParams();

    useEffect(() => {
        apiService.getMovieActors(movieID)
        .then( response => {
          const actors = response.cast.map(actor => {
            return({name: actor.name, character: actor.character, id: actor.credit_id, photo: actor.profile_path})
          })
          setCast(actors);
        })
    }, [movieID]);

    return (
        <>
            <H3 className="isHidden">Actors</H3>
            {cast.length===0 ?
            <p>There is no information about actors</p>
            :
            <Ul>
                {cast.map(actor => {
                    return (
                        <Li key={actor.id}>
                            <div>
                                <h4>{actor.name}</h4>
                                <p>Character: {actor.character}</p>
                            </div>
                            <Img src={actor.photo ? (`https://www.themoviedb.org/t/p/original/${actor.photo}`) : ("https://i.ibb.co/VVFCdTD/image.jpg")} alt={actor.name}></Img>
                        </Li>
                    )
                })}
            </Ul>
            }
        </>
    )
};