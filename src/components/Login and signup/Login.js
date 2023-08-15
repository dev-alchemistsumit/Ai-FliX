import React from "react";
import { auth, GoogleAuthProvider, signInWithPopup } from "../../firebase";

const Login = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        alert(`Welcome, ${user.displayName}!`);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log in with Google</button>
    </div>
  );
};

export default Login;
