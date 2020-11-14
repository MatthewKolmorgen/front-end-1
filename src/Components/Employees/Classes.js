import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({

    activity: yup.string().required("Please enter the name of the activity for this class."),
  
    time: yup.string().required("Please enter the date and time for the activity."),
  
    duration: yup.string().required("Please make sure the time is in minutes."),
  
    intensity: yup.string().required("Please enter the level of intensity."),
  
    loc: yup.string().required("Please enter a location."),

    NoU: yup.string().required("Please enter a password."),

    maxSize: yup.string().required("The maximum size of your class."),
      
  });

const initialClassValues = {

    activity: '',
    time: '',
    duration: '',
    intensity: '',
    loc: '',
    NoU: '',
    maxSize: ''
}

const initialClass = [];
const initialDisabled = true;

const Classes = () => {

    const [classes, newClass] = useState(initialClass);
    const [classValues, setClassValues] = useState(initialClassValues);
    const [errors, setErrors] = useState(initialClassValues);
    const [disabled, setDisabled] = useState(initialDisabled);

    const postClass = (newClass) => {

        axios.post('https://reqres.in/api/classes', newClass)

        .then((res) => {
            newClass([res.data, ...classes])
        })

        .catch((err) => {
            alert('There has been a problem creating this class.', err)
        })

        .finally(() => {
            setClassValues(initialClassValues)
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
      setInstValues({...classValues, [name]: value})
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
  
          setInstValues({...classValues,[name]:checked})
      }

    const onSubmit = (e) => {
        e.preventDefault()

        const newClass = {
            activity: instValues.activity.trim(),
            time: instValues.time.trim(),
            duration: instValues.duration.trim(),
            intensity: instValues.intensity.trim(),
            loc: instValues.loc.trim(),
            NoU: instValues.NoU.trim(),
            maxSize: instValues.maxSize.trim(),
        }

        postClass(newClass);

    }

    useEffect(() => {
        formSchema.isValid(classValues).then(valid => {
            setDisabled(!valid);
        })
    }, [classValues])

    return (

        <Form onSubmit={onSubmit}>

            <label htmlFor='activity'>
                What type of activities are you qualified to instruct?
                <input 
                    id='activity' 
                    name='activity' 
                    type='text' 
                    value={value.activity} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='time'>
                Please select the time for this class.
                <input 
                    id='time' 
                    name='time' 
                    type='datetime-local' 
                    value={value.time} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='duration'>
                How long will your instruction last for? (minutes)
                <input 
                    id='duration' 
                    name='duration' 
                    type='number' 
                    value={value.duration} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='intensity'>
                Please evaluate the level of intensity for these activities.
                <input 
                    id='intensity' 
                    name='intensity' 
                    type='text' 
                    value={value.intensity} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='loc'>
                From what location will you be giving your instructions?
                <input 
                    id='loc' 
                    name='loc' 
                    type='text' 
                    value={value.loc} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='NoU'>
                <input 
                    id='NoU' 
                    name='NoU' 
                    type='text' 
                    value={value.NoU} 
                    onChange={onInputChange}
                 />
            </label>
            <label htmlFor='maxSize'>
                What is the maximum class size you would be willing to instruct?
                <input 
                    id='maxSize' 
                    name='maxSize' 
                    type='text' 
                    value={value.maxSize} 
                    onChange={onInputChange}
                 />
            </label>

        </Form>
    )

}

export default Classes