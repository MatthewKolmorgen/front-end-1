import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { Link } from 'react-router-dom';

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

// const initialLogin = {

//     useremail: '',
//     userpswd1: ''
// }

const UserLogin = () => {

    // const [useremail, userpswd1] = props;

    // axios.get('https://reqres.in/api/user')

    //     .then((res) => {
    //         (res.data)
    //     })

    //     .catch((err) => {
    //         alert('Something went wrong.', err)
    //     })

    return (

        <Form>
            <p>Please login.
            </p>
            <label htmlFor='useremail'>Login: 
                <input
                    id='useremail'
                    name='useremail'
                    type='email'
                    // value={value.useremail}
                    // onChange={onInputChange}
                     />                
            </label>
            <label htmlFor='userpswd1'>Password: 
                <input
                    id='userpswd1'
                    name='userpswd1'
                    type='password'
                    // value={value .userpswd1}
                    // onChange={onInputChange}
                     />
            </label>

            <Link to='/members'>
            <button>Login</button>
            </Link>

            <p>Not a member?</p>
            <Link to='/createaccount'>
            <button>Create an account</button>
            </Link>
                
        </Form>
        
    )
}

export default UserLogin