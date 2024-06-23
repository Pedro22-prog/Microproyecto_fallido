import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="./Login" component={Login} />
        <Route path="./Register" component={Register} />
        <ProtectedRoute path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;