import { useState } from "react";
import { updateVote } from "../api";

const ReviewDetails = ({ singleReview }) => {
  const reviewId = singleReview.map((review) => review.review_id)[0];
  const [voteChange, setVoteChange] = useState(0);
  const incVote = () => {
    setVoteChange((currChange) => {
      return currChange + 1;
    });
    //request
    updateVote(reviewId, 1);
  };
  const decVote = () => {
    setVoteChange((currChange) => {
      return currChange - 1;
    });
    //request
    updateVote(reviewId, -1);
  };
  return singleReview.map((review) => {
    return (
      <article key={review.review_id} className="review">
        <h2 className="review__title">{review.title}</h2>
        <img
          className="review__image"
          alt={review.title}
          src={review.review_img_url}
        />
        <p className="review__body">{review.review_body}</p>
        <section className="vote-section">
          <p className="vote-count">Votes: {review.votes + voteChange}</p>
          <button
            className="vote-button like-button"
            disabled={voteChange === 1}
            onClick={incVote}
          >
            Like <i className="fa fa-thumbs-up"></i>
          </button>
          <button
            className="vote-button dislike-button"
            disabled={voteChange === -1}
            onClick={decVote}
          >
            Dislike <i className="fa fa-thumbs-down"></i>
          </button>
        </section>
      </article>
    );
  });
};

export default ReviewDetails;
