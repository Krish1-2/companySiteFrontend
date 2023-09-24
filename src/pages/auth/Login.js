import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import './Login.css'; // Import your CSS file
import { useNavigate, Link } from 'react-router-dom'; 

function Login() {
    const initialValues = {
        username: '',
        password: '',
    };

    const [isLoggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate(); 

    const handleSubmit =  (values, { resetForm }) => {
        axios
            .post('http://127.0.0.1:8000/api/user/login/', values)
            .then((response) => {
                console.log(values,response);
                sessionStorage.setItem('user', JSON.stringify(response.data.user));
                alert('Login successful');
                setLoggedIn(true); 
            })
            .catch((error) => {
                alert('Login failed. Enter correct credentials'); 
                resetForm();
            });
    };

    if (isLoggedIn) {
        navigate('/');
    }

    return (
        <div className="login-container">
            <h2 className='text-dark'>LOGIN</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field type="text" id="username" name="username" />
                        <ErrorMessage name="username" component="div" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div className='space'></div>
                    <button type="submit" className='submit-auth-btn'>Login</button>
                </Form>
            </Formik>
            <div className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </div>
        </div>
    );
}

export default Login;
