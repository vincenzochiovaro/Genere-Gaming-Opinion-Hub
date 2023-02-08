const ReviewDetails = ({ singleReview }) => {
  return singleReview.map((review) => {
    return (
      <article key={review.review_id} className="review">
        <h3 className="review__title">{review.title}</h3>
        <img
          className="review__image"
          alt={review.review_title}
          src={review.review_img_url}
        />
        <p className="review__body">{review.review_body}</p>
      </article>
    );
  });
};

export default ReviewDetails;
