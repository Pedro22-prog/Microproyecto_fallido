import React from 'react';
import { useAuth } from './contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const history = useHistory();

  if (!currentUser) {
    history.push('/login');
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {currentUser.email}!</p>
    </div>
  );
};

export default Dashboard;