import dayjs from "dayjs";

const AddComment = ({ comments }) => {
  const date = dayjs(comments.created_at).format("DD-MM-YYYY");
  return (
    <section className="comments">
      <textarea></textarea>
      <button>ADD COMMENT</button>
      {comments.map((comment) => {
        return (
          <article className="comment" key={comment.comment_id}>
            <p className="comment__body">{comment.body}</p>
            <p className="comment__info">
              Created at: {date} by {comment.author}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default AddComment;
