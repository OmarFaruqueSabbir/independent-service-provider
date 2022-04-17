import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebas.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();


    let errorElement;
    if(error){
        errorElement =
        <p className='text-danger'>Error: {error?.message}
        </p>
    }
    if(user){
        navigate('/home')
    }
    return (
        <>
            <p className=''>Or sign up with:</p>
            {
                errorElement
            }
            <button onClick={() => signInWithGoogle()} type="button" className="btn btn-primary btn-floating m-2">
                <FcGoogle style={{height:'30px'}} />
                <span className='ps-2'>Google Sign In</span> 
            </button>
        </>
    );
};

export default SocialLogin;