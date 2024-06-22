import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home'; // Assuming Home component exists

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;