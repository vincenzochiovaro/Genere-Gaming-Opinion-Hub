import axios from "axios";

export const fetchReviews = () => {
  return axios.get(
    "https://vincenzos-back-end-project.onrender.com/api/reviews"
  );
};

export const fetchReviewById = (review_id) => {
  return axios.get(
    `https://vincenzos-back-end-project.onrender.com/api/reviews/${review_id}`
  );
};

export const fetchCommentsByReviewId = (review_id) => {
  return axios.get(
    `https://vincenzos-back-end-project.onrender.com/api/reviews/${review_id}/comments`
  );
};

export const updateVote = (revieId, vote) => {
  const patchBody = { inc_votes: vote };
  return axios.patch(
    `https://vincenzos-back-end-project.onrender.com/api/reviews/${revieId}`,
    patchBody
  );
};
