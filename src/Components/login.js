import React from 'react';

const Login = () => {

    return (

        <Enter>
            <Form>
                <label htmlFor='email'>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={onInputChange}
                         />
                </label>
                <label htmlFor='pswd1'>
                    <input
                        id='pswd1'
                        name='pswd1'
                        type='pswd1'
                        value={values.email}
                        onChange={onInputChange}
                         />
                </label>
            </Form>
        </Enter>
    )
}

export default Login