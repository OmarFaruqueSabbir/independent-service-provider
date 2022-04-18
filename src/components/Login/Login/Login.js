import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebas.init';
import { ToastContainer, toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import './login.css'

const Login = () => {
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
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithEmail, user, loading, error1] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth);

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



    let errorElement;


    if (error1) {
        errorElement =
            <p className='text-danger'>Error: {error1?.message}
            </p>
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    const handleSubmit = (event) => {
        event.preventDefault();

        signInWithEmail(userData.email, userData.password);
        // navigate('/home');
    }


    const PasswordReset = async () => {
        const emailReset = userData.email;
        if (emailReset) {
            await sendPasswordResetEmail(emailReset);
            toast('Sent email');
        } else {
            toast('please enter your mail');
        }
    }

    const navigateSign = () => {
        navigate('/register');
    }



    return (
        <div className="container-fluid">
            <section className='my-5'>
                <div className="login-dark">

                    <form onSubmit={handleSubmit}>
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration"><i className="icon ion-ios-locked-outline"></i>
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
                            <button className="btn btn-primary btn-block mb-2 px-4" type="submit">Log In</button>
                        </div>
                        <p className="forgot">New Here? <span onClick={navigateSign} className='text-primary ps-2'>Please Register</span> </p>
                        <p>Forget Password?.. <span className='text-primary ps-2' onClick={PasswordReset}>Reset Password</span> </p>
                        {
                            errorElement
                        }
                        <ToastContainer />
                        <SocialLogin />
                    </form>
                </div>
            </section>
        </div >
    );
};

export default Login;