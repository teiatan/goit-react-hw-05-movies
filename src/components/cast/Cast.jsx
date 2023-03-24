import PropTypes from "prop-types";

export function Cast ({actors}) {
    return (
        <>
            <h3>Actors</h3>
            {actors.length===0 ?
            <p>There is no information about actors</p>
            :
            <ul>
                {actors.map(actor => {
                    return (
                        <li key={actor.id}>
                            <h4>{actor.name}</h4>
                            <p>Character: {actor.character}</p>
                            <img src={actor.photo} alt={actor.name}></img>
                        </li>
                    )
                })}
            </ul>
            }
        </>
    )
};

Cast.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.shape({
        character: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        photo: PropTypes.string,
    }))
};
