import React from "react";
import { auth, GoogleAuthProvider, signInWithPopup } from "../../firebase"; // Import auth and Firebase functions

const Login = () => {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider); // Use the auth instance here
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log in with Google</button>
    </div>
  );
};

export default Login;
