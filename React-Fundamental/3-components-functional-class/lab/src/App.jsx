import React, { Component } from "react";

function Greeting({ name }) {
  return <p className="mb-0">Hello, {name}!</p>;
}

class WelcomeMessage extends Component {
  render() {
    return <p className="mb-0">Welcome to React!</p>;
  }
}

export default function App() {
  return (
    <main className="topic-shell d-flex align-items-center justify-content-center px-3 py-5">
      <section className="card border-0 shadow-lg p-4 p-md-5 topic-card w-100" style={{ maxWidth: 820 }} aria-labelledby="topic-3-title">
        <header className="mb-4">
          <p className="badge bg-success mb-2">Topic 3 Lab</p>
          <h1 id="topic-3-title" className="h4 fw-bold mb-2">
            Components: Functional and Class
          </h1>
          <p className="text-secondary mb-0">This lab compares two component styles while keeping the UI behavior clear and reusable.</p>
        </header>

        <div className="row g-3">
          <div className="col-12 col-md-6">
            <article className="task-card p-3 rounded-3 h-100">
              <p className="text-uppercase small fw-semibold text-secondary mb-2">Task 1</p>
              <h2 className="h6 mb-2">Functional Component</h2>
              <Greeting name="Neel" />
            </article>
          </div>
          <div className="col-12 col-md-6">
            <article className="task-card p-3 rounded-3 h-100">
              <p className="text-uppercase small fw-semibold text-secondary mb-2">Task 2</p>
              <h2 className="h6 mb-2">Class Component</h2>
              <WelcomeMessage />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
