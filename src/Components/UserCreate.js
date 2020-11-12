import React from 'react';

const UserCreate = () => {

    return (

        <Log>
            <label htmlFor='fName'>
                First Name :
            </label>
            <input 
                id='fname'
                name='fname'
                type='text'
                placeholder='Please enter your first name.'
                value={values.fname}
                onChange={onInputChange}
                 />
            <label htmlFor='lName'>
                Last Name:
            </label>
            <input
                id='lname'
                name='lname'
                type='text'
                placeholder='Please enter your last name.'
                value={values.lname}
                onChange={onInputChange}
                 />
            <label htmlFor='email'>
                E-mail:
            </label>
            <input
                id='email'
                name='email'
                type='email'
                placeholder='Please enter your e-mail address.'
                value={values.email}
                onChange={onChangeInput}
                 />
            <label htmlFor='Pswd1'>
                Password:
            </label>
            <input
                id='pswd1'
                name='pswd1'
                type='password'
                placeholder='******'
                minLength='6'
                value={values.pswd1}
                onChange={onInputChange}
                 />
            <label htmlFor='Pswd2'>
                Confirm Password:
            </label>
            <input
                id='pswd2'
                name='pswd2'
                type='password'
                placeholder='******'
                minLength='6'
                 />
        </Log>

    )

}

export default UserCreate