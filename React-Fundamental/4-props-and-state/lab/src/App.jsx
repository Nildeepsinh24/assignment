import { useState } from "react";

const sampleUser = {
  name: "Aarav Patel",
  age: 22,
  location: "Ahmedabad"
};

function UserCard({ name, age, location }) {
  return (
    <article className="card border-0 shadow-sm h-100 task-card">
      <div className="card-body">
        <p className="text-uppercase small fw-semibold text-secondary mb-2">Task 1</p>
        <h3 className="h5 mb-2">{name}</h3>
        <p className="mb-1">
          <strong>Age:</strong> {age}
        </p>
        <p className="mb-0">
          <strong>Location:</strong> {location}
        </p>
      </div>
    </article>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <article className="card border-0 shadow-sm h-100 task-card">
      <div className="card-body">
        <p className="text-uppercase small fw-semibold text-secondary mb-2">Task 2</p>
        <h3 className="h5 mb-3">Counter State</h3>
        <p className="mb-3">Current count: {count}</p>
        <button className="btn btn-primary" onClick={() => setCount((prev) => prev + 1)}>
          Increment
        </button>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="topic-shell py-5">
      <section className="container">
        <div className="hero card border-0 shadow-lg p-4 p-md-5 mb-4" aria-labelledby="topic-4-title">
          <p className="badge bg-primary-subtle text-primary-emphasis mb-2">Topic 4 Lab</p>
          <h1 id="topic-4-title" className="h3 fw-bold mb-2">
            Props and State
          </h1>
          <p className="text-secondary mb-0">Demonstrates prop-driven UI and internal component state updates.</p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <UserCard name={sampleUser.name} age={sampleUser.age} location={sampleUser.location} />
          </div>
          <div className="col-12 col-md-6">
            <Counter />
          </div>
        </div>
      </section>
    </main>
  );
}
