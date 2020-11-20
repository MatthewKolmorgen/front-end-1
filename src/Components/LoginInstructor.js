import React, { useEffect } from 'react';
import { Link, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 5% 0;
    height: 50vh;
    justify-content: space-evenly;
    background: #242943;
    color: #ffffff;
    font-weight: 300;
    line-height: 1.65;
    `;

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

        <Form>

            <p>Please login.</p>
            <p>If you are not an instructor, please click <Link to='login'>here</Link></p>
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
                </p>
                    <Link to='/instructor'>
                        <button>Create Account</button>
                    </Link>
                                   
        </Form>
    )
}

export default LoginInstructor