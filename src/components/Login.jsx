import React from 'react'
import {auth, provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = async() => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  }
  return (
    <div>
      <p>Sign In with Google</p>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  )
}

export default Login
