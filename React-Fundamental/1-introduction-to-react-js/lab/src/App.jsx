function HelloReactMessage() {
  return <h2 className="h4 mb-0">Hello, React!</h2>;
}

export default function App() {
  return (
    <main className="topic-shell d-flex align-items-center justify-content-center px-3 py-5">
      <section className="card border-0 shadow-lg p-4 p-md-5 topic-card w-100" aria-labelledby="topic-1-title">
        <header className="mb-4">
          <p className="badge bg-warning text-dark mb-2">Topic 1 Lab</p>
          <h1 id="topic-1-title" className="h4 fw-bold mb-2">
            Introduction to React.js
          </h1>
          <p className="text-secondary mb-0">This foundational task renders a reusable React component in a structured UI.</p>
        </header>

        <section className="demo-panel p-3 p-md-4 rounded-3">
          <p className="text-uppercase small fw-semibold text-secondary mb-2">Component Output</p>
          <HelloReactMessage />
        </section>
      </section>
    </main>
  );
}
