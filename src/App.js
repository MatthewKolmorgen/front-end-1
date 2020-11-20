import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import MainContent from './Components/MainContent';

import UserLogin from './Components/UserLogin';
import LoginInstructor from './Components/LoginInstructor';
import UserCreate from './Components/UserCreate';
import CreateInstructor from './Components/CreateInstructor';
import Members from './ClientComponents/Members';
import InstructorClasses from './InstructorComponents/InstructrorPage.js';
import styled from 'styled-components';
import Background from './pic07.jpg';

const Img = styled.img`
    height: 8vh;
    width: 100%;
`;

const Div2 = styled.div`
    background: #242943;
    padding: 5% 10% 5%;
    color: #ffffff;
    font-weight: 300;
    line-height: 1.65;
`;

const H1 = styled.h1`
    padding: -5%;
`;

function App() {

    return (
        <div className="App">
            <div><Img src={Background} alt="" /></div>
            <Div2>
            <H1>
                Welcome to Anywhere Fitness!
            </H1>
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
        </Div2>
        </div>

    );
}

export default App