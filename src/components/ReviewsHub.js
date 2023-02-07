import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api";

const ReviewsHub = () => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchReviews().then(({ data }) => {
      setReviews(data);
    });
  }, [category]);

  if (!category) {
    {
      return (
        <section className="reviews-container">
          {reviews.map((review) => (
            <article key={review.review_id} className="review-card">
              <img alt={review.title} src={review.review_img_url} />
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
                <img alt={review.title} src={review.review_img_url} />
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
