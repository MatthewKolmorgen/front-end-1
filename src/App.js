import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import MainContent from './Components/MainContent';

import UserLogin from './Components/UserLogin';
import LoginInstructor from './Components/LoginInstructor';
import UserCreate from './Components/UserCreate';
import CreateInstructor from './Components/CreateInstructor';
import Members from './ClientComponents/Members';
import InstructorClasses from './InstructorComponents/InstructrorPage.js';

function App() {

    return (
        <div className="App">
            <Router>

                {/* Home Page */}

                {/* <Route exact path='/' component={MainContent}>
                    <MainContent />
                </Route> */}

                <Switch>

                    {/* Login Pages */}

                    <Route exact path='/login' component={UserLogin}>
                        <UserLogin />
                    </Route>
                    
                    <Route exact path='/instructorlogin' component={LoginInstructor} />
                    
                    {/* Create Pages */}

                    <Route exact path='/createaccount' component={UserCreate} />
                    <Route exact path='/instructor' component={CreateInstructor} />

                    {/* Main Pages after login */}

                    <Route exact path='/members' component={Members} />
                    <Route exact path='/instructorpage' component={InstructorClasses} />
                </Switch>
            </Router>
        </div>

    );
}

export default App