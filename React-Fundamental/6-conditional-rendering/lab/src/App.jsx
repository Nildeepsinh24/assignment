import { useState } from "react";

function AuthToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <article className="card border-0 shadow-sm h-100 task-card">
      <div className="card-body">
        <p className="text-uppercase small fw-semibold text-secondary mb-2">Task 1</p>
        <h3 className="h5 mb-3">Login/Logout Toggle</h3>
        <p className="mb-3 text-secondary">Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
        <button className="btn btn-primary" onClick={() => setIsLoggedIn((prev) => !prev)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </article>
  );
}

function VotingEligibility() {
  const [age, setAge] = useState("");
  const ageNumber = Number(age);

  return (
    <article className="card border-0 shadow-sm h-100 task-card">
      <div className="card-body">
        <p className="text-uppercase small fw-semibold text-secondary mb-2">Task 2</p>
        <h3 className="h5 mb-3">Voting Eligibility Check</h3>
        <label htmlFor="age" className="form-label fw-semibold">
          Enter age
        </label>
        <input
          id="age"
          type="number"
          min="0"
          className="form-control"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          placeholder="e.g. 18"
        />
        <p className="mt-3 mb-0 text-secondary">
          {age === ""
            ? "Please enter your age."
            : ageNumber >= 18
            ? "You are eligible to vote."
            : "You are not eligible to vote."}
        </p>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="topic-shell py-5">
      <section className="container">
        <div className="hero card border-0 shadow-lg p-4 p-md-5 mb-4" aria-labelledby="topic-6-title">
          <p className="badge bg-success mb-2">Topic 6 Lab</p>
          <h1 id="topic-6-title" className="h3 fw-bold mb-2">
            Conditional Rendering
          </h1>
          <p className="text-secondary mb-0">Demonstrates conditional UI output based on authentication state and age input.</p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <AuthToggle />
          </div>
          <div className="col-12 col-md-6">
            <VotingEligibility />
          </div>
        </div>
      </section>
    </main>
  );
}
