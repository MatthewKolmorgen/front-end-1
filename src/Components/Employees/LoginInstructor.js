import React from 'react';

const LoginInstructor = () => {

    return (

        <Form>

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
            <button>Login</button>
            <p>Do you need to register as an instructor?<button>Create Account</button></p>
            
        </Form>
    )
}

export default LoginInstructor