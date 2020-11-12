import React from 'react';

const LoginInstructor = () => {

    return (

        <Form>

            <label>
                E-mail address
                <input 
                    id='inst-email' 
                    name='inst-email'
                 />
            </label>
            <label>
                Password:
                <input 
                    id='inst-pswd'
                    name='inst-pswd'
                 />
            </label>
        </Form>
    )
}

export default LoginInstructor