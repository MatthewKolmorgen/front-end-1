import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import MainContent from './Components/MainContent';
import UserLogin from './Components/Clients/UserLogin';
import LoginInstructor from './Components/Employees/LoginInstructor';

function App() {

  return (
    <div className="App">
      
      <Link to='/'>
        <MainContent />
      </Link>
      <Switch>
        <Link to='/login'>
          <LoginInstructor />
        </Link>
      </Switch>
      <Switch>
        <Link to='/login'>
          <UserLogin />
        </Link>
      </Switch>

    </div>
  );
}

export default App