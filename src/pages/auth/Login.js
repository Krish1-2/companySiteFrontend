import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import './Login.css'; // Import your CSS file
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
    const initialValues = {
        username: '',
        password: '',
    };

    const [isLoggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (values, { resetForm }) => {
        axios
            .post('http://127.0.0.1:8000/api/user/login/', values)
            .then((response) => {
                console.log(values, response);
                console.log(response.data.access);
                sessionStorage.setItem('user', JSON.stringify(response.data.user));
                sessionStorage.setItem('accessToken', JSON.stringify(response.data.access));
                alert('Login successful');
                setLoggedIn(true);
            })
            .catch((error) => {
                console.log(error)
                alert('Login failed. Enter correct credentials');
                resetForm();
            });
    };

    // const handleGoogleLoginSuccess = (credentialResponse) => {
    //     console.log(credentialResponse);
    //     alert('Login successful');
    //     setLoggedIn(true); // Set the login status to true
    //     navigate('/'); // Navigate to the home page
    // };

    const handleGoogleLoginSuccess = (credentialResponse) => {
        const values = {   
            access_token: credentialResponse.credential,
        };
    
        axios
            .post('http://127.0.0.1:8000/api/user/google-login/', values) // Replace with your actual endpoint URL
            .then((response) => {
                console.log(values, response);
                console.log(response.data.access);
                sessionStorage.setItem('user', JSON.stringify(response.data.user));
                sessionStorage.setItem('accessToken', JSON.stringify(response.data.access));
                console.log(response.data.access)
                alert('Login successful');
                setLoggedIn(true);
            })
            .catch((error) => {
                alert('Login failed. Enter correct credentials');
            });
    };
    
    if (isLoggedIn) {
            navigate('/');
    }

    return (
        <div className="login-container">
            <h2 className="text-dark">LOGIN</h2>
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
                    <div className="space"></div>
                    <button type="submit" className="submit-auth-btn" >
                    <Link to="/"> Login</Link>
                    </button>
                </Form>
            </Formik>
            <div className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </div>

            <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    );
}

export default Login;