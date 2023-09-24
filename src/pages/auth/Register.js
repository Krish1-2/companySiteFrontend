import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import './Register.css'; 
import { useNavigate, Link } from 'react-router-dom'; 

function Register() {
    const initialValues = {
        username: '',
        password1: '',
        password2: '',
    };
    const [isLoggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (values, { resetForm }) => {
        axios
            .post('http://127.0.0.1:8000/api/user/register/', values)
            .then((response) => {
                console.log('Registration successful', response,values);
                alert('Registered successfully');
                sessionStorage.setItem('user', JSON.stringify(values));
                // Reset the form
                setLoggedIn(true);
                resetForm();
            })
            .catch((error) => {
                console.error('Registration failed', error);
            });
    };
    if (isLoggedIn) {
        navigate('/');
    }

    return (
        <div className='register-container'>
            <h2 className='text-dark'>REGISTER</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field type="text" id="username" name="username" />
                        <ErrorMessage name="username" component="div" />
                    </div>
                    <div>
                        <label htmlFor="password1">Password</label>
                        <Field type="password" id="password1" name="password1" />
                        <ErrorMessage name="password1" component="div" />
                    </div>
                    <div>
                        <label htmlFor="password2">Confirm Password</label>
                        <Field type="password" id="password2" name="password2" />
                        <ErrorMessage name="password2" component="div" />
                    </div>
                    <div className='space'></div>
                    <button type="submit" className='submit-auth-btn'>Register</button>
                </Form>
            </Formik>
            <div className="login-link">
                Already have an account? <Link to="/login">Login here</Link>
            </div>
        </div>
    );
}

export default Register;
