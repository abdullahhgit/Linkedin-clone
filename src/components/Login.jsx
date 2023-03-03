import React from 'react'
import {auth, provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  return (
    <div>
      <p>Sign In with Google</p>
      <button>Sign In</button>
    </div>
  )
}

export default Login
