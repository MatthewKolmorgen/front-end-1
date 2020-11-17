import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <BrowserRouter>
      
      <Route exact path='/' component={MainContent}>
        <MainContent />
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
      </Switch>

      </BrowserRouter>
    </div>

  );

}

export default App