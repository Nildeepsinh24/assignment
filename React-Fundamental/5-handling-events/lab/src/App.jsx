import { useState } from "react";

function ClickStatus() {
  const [clicked, setClicked] = useState(false);

  return (
    <article className="card border-0 shadow-sm h-100 task-card">
      <div className="card-body">
        <p className="text-uppercase small fw-semibold text-secondary mb-2">Task 1</p>
        <h3 className="h5 mb-3">Button Click Event</h3>
        <p className="mb-3">{clicked ? "Clicked!" : "Not Clicked"}</p>
        <button className="btn btn-primary" onClick={() => setClicked((prev) => !prev)}>
          {clicked ? "Reset" : "Click Me"}
        </button>
      </div>
    </article>
  );
}

function LiveInput() {
  const [text, setText] = useState("");

  return (
    <article className="card border-0 shadow-sm h-100 task-card">
      <div className="card-body">
        <p className="text-uppercase small fw-semibold text-secondary mb-2">Task 2</p>
        <h3 className="h5 mb-3">Input Change Event</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="live-input" className="form-label fw-semibold">
            Type something
          </label>
          <input
            id="live-input"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing..."
          />
        </form>
        <p className="mt-3 mb-0 text-secondary">Live value: {text || "(empty)"}</p>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="topic-shell py-5">
      <section className="container">
        <div className="hero card border-0 shadow-lg p-4 p-md-5 mb-4" aria-labelledby="topic-5-title">
          <p className="badge bg-warning text-dark mb-2">Topic 5 Lab</p>
          <h1 id="topic-5-title" className="h3 fw-bold mb-2">
            Handling Events in React
          </h1>
          <p className="text-secondary mb-0">Demonstrates interactive UI behavior using onClick and onChange handlers.</p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <ClickStatus />
          </div>
          <div className="col-12 col-md-6">
            <LiveInput />
          </div>
        </div>
      </section>
    </main>
  );
}
