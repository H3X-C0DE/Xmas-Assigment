import React, { useState, useEffect } from "react";

function CommentSection() {
  const [comments, setComments] = useState([]); // Array to store the comments
  const [newComment, setNewComment] = useState(""); // State to store the new comment being written

  // Function to handle the submission of a new comment
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    if (newComment.trim() === "") return; // Do nothing if the comment is empty

    // Add the new comment to the comments array and reset the new comment state
    setComments([...comments, newComment]);
    setNewComment("");

    // Save the comments to local storage
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  // Function to handle the change of the new comment state
  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  // When the component mounts, load the comments from local storage
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  return (
    <div>
      <h2>Comment Section</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-comment">Write a comment:</label>
        <br />
        <textarea
          id="new-comment"
          value={newComment}
          onChange={handleChange}
          rows={5}
          cols={50}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h3>Comments:</h3>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
}

export default CommentSection;
