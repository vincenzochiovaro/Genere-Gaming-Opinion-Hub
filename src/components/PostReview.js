import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../api";
import AddComment from "./AddComment";
import ReviewDetails from "./ReviewDetails";

const PostReview = () => {
  const [singleReview, setSingleReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    fetchReviewById(review_id).then(({ data }) => {
      setSingleReview(data);
    });
  }, [review_id]);

  return (
    <>
      <section>
        <ReviewDetails singleReview={singleReview} />
      </section>

      <section>
        <AddComment />
      </section>
    </>
  );
};

export default PostReview;
