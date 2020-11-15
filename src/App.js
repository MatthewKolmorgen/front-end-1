import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import MainContent from './Components/MainContent';
import UserLogin from './Components/Clients/UserLogin';
import UserCreate from './Components/Clients/UserCreate';
import Members from './Components/Clients/Members';
import LoginInstructor from './Components/Employees/LoginInstructor';
import CreateInstructor from './Components/Employees/CreateInstructor';
import Classes from './Components/Employees/Classes';

function App() {

  return (
    <div className="App">
      
      <Route path='/' component={MainContent} />
      <Route path='/login' component={UserLogin} />
      <Route path='/createaccount' component={UserCreate} />
      <Route path='/members' component={Members} />
      <Route path='/instructorlogin' component={LoginInstructor} />
      <Route path='/instructor' component={CreateInstructor} />
      <Route path='/classes' component={Classes} />

    </div>
  );
}

export default App