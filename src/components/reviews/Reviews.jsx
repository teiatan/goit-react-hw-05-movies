import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "service/themoviedbApi";

export function Reviews () {
    const [reviews, setReviews] = useState([]);
    const { movieID } = useParams();

    useEffect(() => {
        apiService.getMovieReviews(movieID)
        .then(response => {
          const reviewsData = response.results.map(review => {return({author: review.author, review: review.content, id: review.id})})
          setReviews(reviewsData);
        })
      }, [movieID]);

    const getMovieReview = () => {
        apiService.getMovieReviews(movieID)
        .then(response => {
          const reviewsData = response.results.map(review => {return({author: review.author, review: review.content, id: review.id})})
          setReviews(reviewsData);
        })
      };

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