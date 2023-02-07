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
