import React from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({

    username: yup.string().required("A username is required."),

    fname: yup.string().required("Please enter your first name."),

    lname: yup.string().required("Please enter your last name."),

    email: yup.string().email("Must enter a valid email address.").required("An e-mail address is required."),

    Pswd1: yup.string().min(6, 'Passwords must be at least 6 chatracters long.').required("Please enter a password."),

    Pswd2: yup.string().equals({Pswd1}),

    terms: yup.boolean().oneOf([true], "Terms of Service must be accepted."),

});

export default formSchema