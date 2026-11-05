
import React, { useState } from "react";

function Managing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Feedback Submitted Successfully!");
    setName("");
    setEmail("");
    setFeedback("");
  }

  return (
    <div>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <textarea
          placeholder="Enter Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Managing;
