const AddComment = ({ comments }) => {
  return (
    <section className="comments">
      <textarea></textarea>
      <button>ADD COMMENT</button>
      {comments.map((comment) => {
        return (
          <article className="comment" key={comment.comment_id}>
            <p className="comment__body">{comment.body}</p>
            <p className="comment__info">
              Created at: {comment.created_at} by {comment.author}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default AddComment;
