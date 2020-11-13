import React from 'react';

const UserLogin = () => {

    
    return (

        <Enter>
            <Form>

                <label htmlFor='useremail'>
                    <input
                        id='useremail'
                        name='useremail'
                        type='email'
                        value={values.useremail}
                        onChange={onInputChange}
                         />
                </label>
                <label htmlFor='userpswd1'>
                    <input
                        id='userpswd1'
                        name='userpswd1'
                        type='password'
                        value={values.userpswd1}
                        onChange={onInputChange}
                         />
                </label>
                <button>Login</button>
                
            </Form>
        </Enter>
    )
}

export default UserLogin