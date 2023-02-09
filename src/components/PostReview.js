import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByReviewId, fetchReviewById } from "../api";
import AddComment from "./AddComment";
import ReviewDetails from "./ReviewDetails";

const PostReview = () => {
  const [singleReview, setSingleReview] = useState([]);
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    Promise.all([
      fetchReviewById(review_id),
      fetchCommentsByReviewId(review_id),
    ]).then((results) => {
      setSingleReview(results[0].data);
      setComments(results[1].data);
    });
  }, [review_id]);

  return (
    <>
      <section>
        <ReviewDetails singleReview={singleReview} />
      </section>

      <section>
        <AddComment
          setComments={setComments}
          comments={comments}
          userNameReview={singleReview.map((review) => review.owner)[0]}
        />
      </section>
    </>
  );
};

export default PostReview;
