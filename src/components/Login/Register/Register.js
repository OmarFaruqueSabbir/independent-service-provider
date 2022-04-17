import React, { useEffect, useState } from 'react';
import auth from '../../../firebas.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const handleEmail = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validMail = emailRegex.test(event.target.value);

        if (validMail) {
            setUserData({ ...userData, email: event.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Please provide valid email" });
            setUserData({ ...userData, email: "" });
        }

        // setEmail(e.target.value);
    };



    const handlePassword = (event) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserData({ ...userData, password: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Input 6 characters!" });
            setUserData({ ...userData, password: "" });
        }
    };

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const navigateLogin = () => {
        navigate('/login');
    }

    const [createUserWithEmailAndPassword, user, loading, error2] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

        useEffect(() => {
            if (user) {
                navigate(from);
            }
        }, [user]);

        
    const handleSubmit = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(userData.email, userData.password);
        // navigate('/home');
    }

    useEffect(() => {
        if (error2) {
            switch (error2?.code) {
                default:
                    toast("❌ user exists or something went wrong!!");
            }
        }
    }, [error2]);
    return (
        <div className="container-fluid">
            <section className='my-5 section'>
                <div className="login-dark">
                    <form onSubmit={handleSubmit}>
                        <h2 className="sr-only">Register Form</h2>
                        <div className="illustration"><i className="icon ion-ios-locked-outline"></i>
                        </div>
                        <div className="form-group">
                            <input className="form-control" name="name" type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Email" onBlur={handleEmail} required />
                            {errors?.email && <p className="text-danger">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="Password" onBlur={handlePassword} required />
                            {errors?.password && <p className="text-danger">{errors.password}</p>}
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block mb-2" type="submit">Sign Up</button>
                        </div>
                        <p className="forgot">Already Signed Up? <span onClick={navigateLogin} className='text-primary'>Please Login</span> </p>
                        <ToastContainer />
                        <SocialLogin />
                    </form>
                </div>
            </section>
        </div >
    );
};

export default Register;