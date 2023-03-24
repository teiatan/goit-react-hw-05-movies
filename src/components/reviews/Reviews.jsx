import PropTypes from "prop-types";

export function Reviews ({reviews}) {
    return(
        <ul>Reviews</ul>
    )
};

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        review: PropTypes.string,
    }))
};