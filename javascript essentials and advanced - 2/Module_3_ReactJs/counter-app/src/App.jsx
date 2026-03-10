import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Example list for the "List View" requirement
  const reactBenefits = [
    { id: 1, text: "Use Array.map" },
    { id: 2, text: "Not a for loop" },
    { id: 3, text: "Give each item a unique key" },
    { id: 4, text: "Avoid using array index as the key" }
  ];

  return (
    <div className="container">

      {/* Requirement 1: The "React Way" to Render a List */}
      <section className="list-section">
        <h2>The "React Way" to Render a List</h2>
        <ul className="benefits-list">
          {reactBenefits.map((item) => (
            <li key={item.id}>
              <span className="check-icon">✓</span>
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      {/* Requirement 2: Increment/Decrement state change */}
      <section className="counter-section">
        <h1>React Web</h1>
        <div className="counter-display">
          <h2>{count}</h2>
        </div>

        <div className="button-group">
          <button
            className="btn btn-decrement"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>

          <button
            className="btn btn-increment"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>

        <button
          className="btn btn-reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </section>

    </div>
  )
}

export default App
