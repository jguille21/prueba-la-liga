import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { Header, Login, UsersListContainer, UserDetail } from './components';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/userlist">
          <UsersListContainer />
        </Route>
        <Route path="/userlist/:id">
          <UserDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
