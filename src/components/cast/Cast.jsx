import PropTypes from "prop-types";

export function Cast ({actors}) {

};

Cast.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.shape({
        character: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        photo: PropTypes.string,
    }))
};
