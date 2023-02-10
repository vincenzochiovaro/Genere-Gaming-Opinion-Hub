import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { insertComment } from "../api";
import { deleteComment } from "../api";
const AddComment = ({ setComments, comments, userNameReview }) => {
  const reviewId = comments.map((comment) => comment.review_id)[0];
  const [textComment, setTextComment] = useState("");
  const [isCommentAdded, setIsCommentAdded] = useState(false);
  const [isCommentDeleted, setIsCommentDeleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    insertComment(reviewId, userNameReview, textComment).then(
      (commentFromApi) => {
        setComments((currentComments) => [commentFromApi, ...currentComments]);
        setIsCommentAdded(true);
      }
    );
    setTextComment("");
  };
  //added this
  const removeComment = (commentId) => {
    deleteComment(commentId).then(() => {
      setComments(
        comments.filter((comment) => comment.comment_id !== commentId)
      );
      setIsCommentDeleted(true);
    });
  };
  //added this

  return (
    <section className="comments">
      <form onSubmit={handleSubmit}>
        {isCommentAdded ? (
          <p className="add__comment__message">Thanks for posting</p>
        ) : (
          <textarea
            type="text"
            placeholder="Please insert at least 5 characters"
            value={textComment}
            onChange={(e) => {
              setTextComment(e.target.value);
            }}
          ></textarea>
        )}

        <button disabled={textComment.length < 5} className="btn add__comment">
          ADD COMMENT
        </button>
      </form>
      {/* deleteComment message*/}
      {isCommentDeleted ? (
        <div className="delete__comment__message">
          <p>
            Comment Deleted <i className="fa-solid fa-square-check"></i>
          </p>
        </div>
      ) : (
        <p></p>
      )}
      {/* deleteComment message*/}

      {comments.map((comment) => {
        {
        }
        const date = dayjs(comment.created_at).format("DD-MM-YYYY");

        return (
          <article className="comment" key={comment.comment_id}>
            <p className="comment__body">{comment.body}</p>
            <p className="comment__info">
              Created at: {date} by {comment.author}
            </p>
            {/* addedd this */}

            {userNameReview === comment.author ? (
              <button
                className="delete-button"
                onClick={() => {
                  {
                    removeComment(comment.comment_id);
                  }
                }}
              >
                DELETE
                <i className="fas fa-trash-alt fa-2x"></i>
              </button>
            ) : (
              <p></p>
            )}
            {/* addedd this */}
          </article>
        );
      })}
    </section>
  );
};

export default AddComment;
