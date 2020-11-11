import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as Yup from 'yup';
import formSchema from './components/FormSchema';

function App(props) {

  const initialFormValues = {
  
    fname: '',
    lname: '',
    email: '',
    password: '',
    terms: false
  
  }
  
  const initialUsers = [];
  const initialDisabled = true;
  
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postUser = (newUser) => {

    Axios.post('', newUser)

      .then((res) => {
        setUsers([res.data, ...users])
      })

      .catch((err) => {
        debugger;
        alert('We have identified a problem.', err)
      })
      
      .finally(() => {
        setFormValues(initialFormValues)
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
  setFormValues({...formValues, [name]: value})
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

    setFormValues({...formValues,[name]:checked})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }

    postUser(newUser);
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  return (
    <div className="App">
      <HeadNav />
      <MainContent />
      <FootNav />
    </div>
  );
}

export default App