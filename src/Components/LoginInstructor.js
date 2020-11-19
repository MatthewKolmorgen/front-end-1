import React, { useEffect } from 'react';
import { Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

const LoginInstructor = () => {

    // const getInst = () => {

    //     axios.get('https://reqres.in/api/instructor')
        
    //     .then((info) => {
    //         getInst(info.data);
            
    //     })

    //     .catch((err) => {

    //         alert('Login error. Please try again.', err)
    //     })

    // }

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
            
                <Link to='/instructorpage'>
                    <button>Login</button>
                </Link>

                <p>Do you need to register as an instructor?
                    <Link to='/instructor'>
                        <button>Create Account</button>
                    </Link>
                </p>                   
        </form>
    )
}

export default LoginInstructor