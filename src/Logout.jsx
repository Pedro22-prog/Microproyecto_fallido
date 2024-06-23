import React from 'react';
import { useAuth } from './contexts/AuthContext';

const Logout = () => {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;