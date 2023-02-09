import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchReviews } from "../api";

const ReviewsHub = () => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then(({ data }) => {
      setReviews(data);
      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-spinner fa-spin"></i>
        <p className="spinner__message">
          Please wait while our page is loading...
        </p>
      </div>
    );
  }

  if (!category) {
    {
      return (
        <section className="reviews-container">
          {reviews.map((review) => (
            <article key={review.review_id} className="review-card">
              <Link to={`/addReview/${review.review_id}`}>
                <img
                  id={review.review_id}
                  alt={review.title}
                  src={review.review_img_url}
                />
              </Link>
              <h2>{review.title}</h2>
              <p>Genre: {review.category}</p>
              <p>By: {review.owner}</p>
            </article>
          ))}
        </section>
      );
    }
  } else {
    {
      return (
        <section className="reviews-container">
          {reviews
            .filter((review) => review.category === category)
            .map((review) => (
              <article key={review.review_id} className="review-card">
                <Link to={`/addReview/${review.review_id}`}>
                  <img
                    id={review.review_id}
                    alt={review.title}
                    src={review.review_img_url}
                  />
                </Link>
                <h2>{review.title}</h2>
                <p>Genre: {review.category}</p>
                <p>By: {review.owner}</p>
              </article>
            ))}
        </section>
      );
    }
  }
};

export default ReviewsHub;
