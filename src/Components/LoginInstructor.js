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
            
        </Form>
    )
}

export default LoginInstructor