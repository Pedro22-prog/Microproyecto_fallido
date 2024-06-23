import React from 'react';
import { useAuth } from './contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { currentUser, signOut } = useAuth();

  if (!currentUser) {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">{currentUser.email}</Link>
          </li>
          <li>
            <Link to="/logout" onClick={signOut}>Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;