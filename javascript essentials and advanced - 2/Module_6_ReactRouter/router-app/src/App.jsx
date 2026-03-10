import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';

// Lazy load the main modules to split the code bundle
const AdminModule = lazy(() => import('./modules/AdminModule'));
const UserModule = lazy(() => import('./modules/UserModule'));

// Fallback loader while lazy components are downloading
const Loader = () => <div className="loader">Loading Module...</div>;

// Main App Layout Header
const Layout = () => (
  <div className="app-container">
    <nav className="main-nav">
      <h2>MyApp</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Portal</Link>
        <Link to="/user">User Portal</Link>
      </div>
    </nav>
    <main className="content-area">
      {/* 
        The <Outlet /> acts as a placeholder where the child routes (like Home, AdminModule, UserModule) 
        will be injected based on the current URL.
      */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  </div>
);

// Simple Home Component
const Home = () => (
  <div className="home-panel">
    <h1>Welcome to the React Router Demo</h1>
    <p>Please select a module from the navigation bar above to load its specific child routes lazily.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin/*" element={<AdminModule />} />
          <Route path="user/*" element={<UserModule />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
