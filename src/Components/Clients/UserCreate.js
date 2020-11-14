import React, { useState, useEffect } from 'react';

const initialUserValues = {

    userfname: '',
    userlname: '',
    useremail: '',
    userpswd1: '',

}

const initialUser = [];
const initialDisabled = true;

const formSchema = yup.object().shape({

  userfname: yup.string().required("Please enter your first name."),

  userlname: yup.string().required("Please enter your last name."),

  useremail: yup.string().email("Must enter a valid email address.").required("An e-mail address is required."),

  userpswd1: yup.string().min(6, 'Passwords must be at least 6 chatracters long.').required("Please enter a password."),

  userpswd2: yup.string().required('Re-enter password.').test('passwords-match', 'Passwords must match.', function(value) {
      return this.parent.password === value.userpswd1;
    }),

});

const UserCreate = () => {

    const [user, newUser] = useState(initialUser);
    const [userValues, setUserValues] = useState(initialUserValues);
    const [errors, setErrors] = useState(initialUserValues);
    const [disabled, setDisabled] = useState(initialDisabled);

    const postUser = (newUser) => {

        Axios.post('https://reqres.in/api/user', newUser)

        .then((res) => {
            newInstructor([res.data, ...user])
        })

        .catch((err) => {
            alert('There was an error while becoming a memember.', err)
        })

        .finally(() => {
            setInstValues(initialUserValues)
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
  
      const onCheckboxChange = (e) => {
        const {name, checked} = e.target;
    
        yup
          .reach(formSchema, name)
          .validate(checked)
          .then(() => {
            setErrors({...errors,[name]: ''})
          })
          .catch((err) => {
            setErrors({...errors,[name]:err.errors[0]})
          })
  
        setUserValues({...userValues,[name]:checked})
      }
  
      const onSubmit = (e) => {
        e.preventDefault()
    
        const newUser = {
            username: userValues.username.trim(),
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

        <Log>

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
                value={values.userfname}
                onChange={onInputChange}
                 />
            <label htmlFor='userlName'>
                Last Name:
            </label>
            <input
                id='userlName'
                name='userlName'
                type='text'
                placeholder='Please enter your last name.'
                value={values.userlname}
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
                value={values.useremail}
                onChange={onChangeInput}
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
                value={values.userpswd1}
                onChange={onInputChange}
                 />
            <label htmlFor='userpswd2'>
                Confirm Password:
            </label>
            <input
                id='userpswd2'
                name='userpswd2'
                type='password'
                placeholder='******'
                minLength='6'
                 />
            <button>Submit Form</button>
            <p>Already a member?<button>Login</button></p>
        </Log>

    )

}

export default UserCreate