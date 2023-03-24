import PropTypes from "prop-types";

export function Reviews ({reviews}) {
    return(
        <>
        {reviews.length ===0 ?
        <p> there are no reviews yet</p>
        :
            <>
                <h3>Reviews</h3> 
                <ul>
                    {reviews.map(review => {
                        return(
                            <li key={review.id}>
                                <h3>Author: {review.author}</h3>
                                <p>{review.review}</p>
                            </li>
                        )
                    })}
                </ul>
            </>
        }
        </>
    )
};

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        review: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }))
};