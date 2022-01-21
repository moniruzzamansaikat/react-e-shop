import React, { useContext, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import '../firebase-config';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // if user, redirect to home
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  // google sign in
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((data) => {
        const { displayName: name, email, photoUrl } = data.user;
        console.log(data);
        const user = {
          name,
          email,
          photoUrl,
        };
        setUser(user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="loginpage container">
      <div className="row mt-5">
        <div className="col-12 col-md-4 offset-md-4">
          <LoginForm />

          <p> or </p>
          <button
            className="btn btn-custom text-center w-100"
            onClick={handleGoogleSignIn}
          >
            Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
