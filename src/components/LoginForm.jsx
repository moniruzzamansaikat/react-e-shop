import React from 'react';
import '../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

// firebase error messages
const firebaseErrorMessages = {
  'auth/invalid-email': {
    type: 'error',
    message: 'No user found !',
  },
};

function LoginForm() {
  // login form
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password)
      .then((d) => {
        console.log(d);
        console.log('logged in');
      })
      .catch((error) => {
        toast(firebaseErrorMessages[error.code].message, {
          type: 'error',
        });
      });
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email" className="mb-2">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
          tabIndex={1}
        />
      </div>

      <div className="form-group mt-4 mb-3">
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter your password"
          tabIndex={2}
        />
      </div>

      <div className="form-group my-4 ">
        <button type="submit" className="btn btn-custom">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
