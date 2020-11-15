import React from 'react';
import axios from 'axios';

const initialLogin = {

    useremail = '',
    userpswd1 = ''
}

const UserLogin = () => {

    const [useremail, userpswd1] = props;

    axios.get('https://reqres.in/api/user')

        .then((res) => {
            (res.data)
        })

        .catch((err) => {
            alert('Something went wrong.', err)
        })

    return (

        <form>

            <label htmlFor='useremail'>
                <input
                    id='useremail'
                    name='useremail'
                    type='email'
                    value={props.useremail}
                    onChange={onInputChange}
                     />                
            </label>
            <label htmlFor='userpswd1'>
                <input
                    id='userpswd1'
                    name='userpswd1'
                    type='password'
                    value={props.userpswd1}
                    onChange={onInputChange}
                     />
            </label>
            <button>Login</button>
            <p>Not a member?<button>Create an account</button></p>
                
        </form>
        
    )
}

export default UserLogin