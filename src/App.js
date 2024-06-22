import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/auth">
            <AuthForm />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;