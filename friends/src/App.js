import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends List</Link>
        <Switch >
          <Route path='/login' component={Login} />
          <PrivateRoute path='/friends' component={FriendsList}/>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
