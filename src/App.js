import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import styled from 'styled-components';
// import MainContent from './Components/MainContent';
import UserLogin from './Components/Clients/UserLogin';
import UserCreate from './Components/Clients/UserCreate';
import Members from './Components/Clients/Members';
import LoginInstructor from './Components/Employees/LoginInstructor';
import CreateInstructor from './Components/Employees/CreateInstructor';
import Classes from './Components/Employees/Classes';
import ClassCard from './Components/Employees/ClassCard';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
      <Route exact path='/' component={() => {window.location.href = "../public/index.html";
          return null;
      }}>
      </Route>

      <Switch>
        <Route exact path='/login' component={UserLogin}>
          <UserLogin />
        </Route>
        <Route exact path='/createaccount' component={UserCreate} />
        <Route exact path='/members' component={Members} />
        <Route exact path='/instructorlogin' component={LoginInstructor} />
        <Route exact path='/instructor' component={CreateInstructor} />
        <Route exact path='/classes' component={Classes} />
        <Route exact path='/classcard' component={ClassCard} />
      </Switch>

      </BrowserRouter>
    </div>

  );

}

export default App