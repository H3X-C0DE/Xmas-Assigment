import React, { useState, useEffect } from "react";
import moment from "moment";
import pfp from "../assets/images/default-pfp.jpg";
function CommentSection() {
  const startDate = moment().subtract(1, "year");
  const endDate = moment();
  // Initialize the state for the comments and the pre-made comments
  const [comments, setComments] = useState([]);
  // Set the placeholder comments
  const fakeComments = [
    {
      text: "Lovely colors",
      time: moment(startDate + Math.random() * (endDate - startDate)),
    },
    {
      text: "Great looking project",
      time: moment(startDate + Math.random() * (endDate - startDate)),
    },
    {
      text: "Hmm could still do with some work visually but Other then that it's looking pretty good",
      time: moment(startDate + Math.random() * (endDate - startDate)),
    },
    {
      text: "I did something similar to this project once. But it was with vanilla Javascript",
      time: moment(startDate + Math.random() * (endDate - startDate)),
    },
    {
      text: "Cool project, keep it up!",
      time: moment(startDate + Math.random() * (endDate - startDate)),
    },
  ];
  // Load the comments from local storage
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  // Save the comments to local storage when the comments array changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.elements.comment.value;
    const time = moment();
    setComments([...comments, { text: comment, time }]);
    form.reset();
  };

  return (
    <>
      <div className="blur-bg"></div>
      <div className="comment-section">
        <h2>Guest Book</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Leave a comment:</label>
          <br />
          <textarea
            name="comment"
            rows={5}
            cols={50}
            placeholder="write a little message"
            required
          />
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
        <div className="comments">
          {comments.map(({ text, time }) => (
            <div className="comment-box" key={time.valueOf()}>
              <img src={pfp} alt={pfp} />
              <div className="info">
                <p className="time-stamp">
                  {time.format("YYYY-MM-DD HH:mm:ss")}
                </p>
                <p className="comment-text">{text}</p>
              </div>
            </div>
          ))}
          {fakeComments.map(({ text, time }) => (
            <div className="comment-box" key={time.valueOf()}>
              <img src={pfp} alt={pfp} />
              <div className="info">
                <p className="time-stamp">
                  {time.format("YYYY-MM-DD HH:mm:ss")}
                </p>
                <p className="comment-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CommentSection;
