import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const initialUserValues = {

    userfname: '',
    userlname: '',
    useremail: '',
    userpswd1: '',
    // userpswd2: '',

}

const initialUser = [];
const initialDisabled = true;

const formSchema = yup.object().shape({

  userfname: yup.string().required("Please enter your first name."),

  userlname: yup.string().required("Please enter your last name."),

  useremail: yup.string().email("Must enter a valid email address.").required("An e-mail address is required."),

  userpswd1: yup.string().min(6, 'Passwords must be at least 6 chatracters long.').required("Please enter a password."),

//   userpswd2: yup.string().required('Re-enter password.').test('passwords-match', 'Passwords must match.', function(user) {
//       return user.userpswd2 === user.userpswd1;
//     }),

});

const UserCreate = () => {

    const [user, newUser] = useState(initialUser);
    const [userValues, setUserValues] = useState(initialUserValues);
    const [errors, setErrors] = useState(initialUserValues);
    const [disabled, setDisabled] = useState(initialDisabled);

    const postUser = (newUser) => {

        axios.post('https://reqres.in/api/user', newUser)

        .then((res) => {
            newUser([res.data, ...user])
        })

        .catch((err) => {
            alert('There was an error while becoming a memember.', err)
        })

        .finally(() => {
            setUserValues(initialUserValues)
        })
    
    }

    const onInputChange = (e) => {

        const {name, value} = e.target;
  
        yup.reach(formSchema, name)
        .validate(value)
        .then(() => {
          setErrors({...errors, [name]: ''})
        })
        .catch((err) => {
          setErrors({...errors, [name]: err.errors[0]})
        })
      setUserValues({...userValues, [name]: value})
      }
  
      const onSubmit = (e) => {
        e.preventDefault()
    
        const newUser = {
            userfname: userValues.userfname.trim(),
            userlname: userValues.userlname.trim(),
            useremail: userValues.useremail.trim(),
            userpswd1: userValues.userpswd1.trim(),
        }
    
        postUser(newUser);
      }
    
      useEffect(() => {
        formSchema.isValid(userValues).then(valid => {
          setDisabled(!valid);
        })
      }, [userValues])

    return (

        <form onSubmit={onSubmit}>

            <h1>Welcome to Anywhere Fitness!</h1>
            <p>Please fill out the form below to join.</p>

            <label htmlFor='userfname'>
                First Name :
            </label>
            <input 
                id='userfname'
                name='userfname'
                type='text'
                placeholder='Please enter your first name.'
                value={user.userfname}
                onChange={onInputChange}
                 />
            <label htmlFor='userlname'>
                Last Name:
            </label>
            <input
                id='userlname'
                name='userlname'
                type='text'
                placeholder='Please enter your last name.'
                value={user.userlname}
                onChange={onInputChange}
                 />
            <label htmlFor='useremail'>
                E-mail:
            </label>
            <input
                id='useremail'
                name='useremail'
                type='email'
                placeholder='Please enter your e-mail address.'
                value={user.useremail}
                onChange={onInputChange}
                 />
            <label htmlFor='userpswd1'>
                Password:
            </label>
            <input
                id='userpswd1'
                name='userpswd1'
                type='password'
                placeholder='******'
                minLength='6'
                value={user.userpswd1}
                onChange={onInputChange}
                 />
            {/* <label htmlFor='userpswd2'>
                Confirm Password:
            </label>
            <input
                id='userpswd2'
                name='userpswd2'
                type='password'
                placeholder='******'
                minLength='6'
                value={user.userpswd2}
                 /> */}

            <Link to='/members'>
            <button>Submit Form</button>
            </Link>

            <p>Already a member?
            <Link to='/login'>
            <button>Login</button>
            </Link>
            </p>
            
        </form>

    )

}

export default UserCreate