const lesson = {
  topic: "JSX",
  reason: "because it makes UI code readable and dynamic"
};

export default function App() {
  const isLearningJsx = true;
  const message = `${lesson.topic} is used in React ${lesson.reason}.`;

  return (
    <main className="topic-shell d-flex align-items-center justify-content-center px-3 py-5">
      <section className="card border-0 shadow-lg p-4 p-md-5 topic-card w-100" aria-labelledby="jsx-title">
        <header className="mb-4">
          <p className="badge bg-info text-dark mb-2">Topic 2 Lab</p>
          <h1 id="jsx-title" className="h4 fw-bold mb-2">
            Welcome to JSX
          </h1>
          <p className="text-secondary mb-0">This screen demonstrates variables, expressions, and conditional rendering in JSX.</p>
        </header>

        <section className="demo-panel p-3 p-md-4 rounded-3">
          <h2 className="h6 fw-semibold mb-3">Rendered Output</h2>
          <p className="mb-2">{message}</p>
          <p className="mb-0">
            Status: <strong>{isLearningJsx ? "Learning JSX" : "JSX Not Started"}</strong>
          </p>
        </section>
      </section>
    </main>
  );
}
