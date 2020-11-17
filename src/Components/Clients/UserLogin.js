import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

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

        <form>

            <label htmlFor='useremail'>
                <input
                    id='useremail'
                    name='useremail'
                    type='email'
                    // value={value.useremail}
                    // onChange={onInputChange}
                     />                
            </label>
            <label htmlFor='userpswd1'>
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

            <p>Not a member?
            <Link to='/createaccount'>
            <button>Create an account</button>
            </Link>
            </p>
                
        </form>
        
    )
}

export default UserLogin