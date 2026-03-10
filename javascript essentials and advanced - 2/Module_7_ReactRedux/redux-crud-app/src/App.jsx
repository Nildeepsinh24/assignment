import { useSelector } from 'react';
import AuthPage from './AuthPage';
import CrudApp from './CrudApp';

function App() {
  const { isAuthenticated } = useSelector(state => state.auth);

  // Simple conditional rendering based on Redux Auth State
  return (
    <div className="App">
      {isAuthenticated ? <CrudApp /> : <AuthPage />}
    </div>
  );
}

export default App;
