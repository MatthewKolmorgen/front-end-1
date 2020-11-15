import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

const LoginInstructor = () => {

    const getInst = () => {

        axios.get('https://reqres.in/api/instructor')
        
        .then((info) => {
            getInst(info.data);
            
        })

        .catch((err) => {

            alert('Login error. Please try again.', err)
        })

    }

    return (

        <form>

            <label>
                E-mail address
                <input 
                    id='instemail' 
                    name='instemail'
                 />
            </label>
            <label>
                Password:
                <input 
                    id='instpswd'
                    name='instpswd'
                 />
            </label>
            <Switch>
                <Route to='/members'>
                <button>Login</button>
                </Route>
            </Switch>

            <Switch>
                <Route to='/createaccount'>
                <p>Do you need to register as an instructor?<button>Create Account</button></p>
                </Route>
            </Switch>
            
            
            
        </form>
    )
}

export default LoginInstructor