import React from 'react';
import './App.css';
import Dashboard from './containers/dashboard/Dashboard';
import Login from './containers/login/Login';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route strict path="/login" component={Login} />
          <Route path="/" component={Dashboard} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
