import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Props
function Student({ name }) {
  return <h2>Welcome {name}</h2>;
}

// Home Component
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>FORM</h1>

      <Student name="Rahul" />

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <h2>Exam Result</h2>
      {count >= 5 ? "Pass" : "Fail"}
    </>
  );
}

// About Component
function About() {
  return <h1>About Page</h1>;
}

// Main Component
function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;