import React from "react";
import { auth, GoogleAuthProvider, signInWithPopup } from "../../firebase";
import logo from "../../assets/logo.png";
import logocover from "../../assets/logo-border.png";
import styled from "styled-components";

import one from "../../assets/loginPage Images/one.png";
import two from "../../assets/loginPage Images/two.png";
import three from "../../assets/loginPage Images/three.png";

import four from "../../assets/loginPage Images/four.png";

import five from "../../assets/loginPage Images/five.png";
import six from "../../assets/loginPage Images/six.png";
import seven from "../../assets/loginPage Images/seven.png";

import Lottie from "lottie-react";
import animationData from "../../assets/animation/netflixAnimation.json"; // Import your JSON animation file

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
    <div className=" h-full md:h-screen flex flex-col md:">
      <div className="flex flex-col md:flex-col  ">
        <div className="flex flex-row justify-between fixed m-5 md:m-0 md:static  bg-mynavyblue header-container">
          <div className="flex">
            <img src={logo} alt="Logo" className="logo md:h-full " />
          </div>
          <div className="flex flex-col justify-center p-3 m-3 rounded-full bg-white text-black ">
            <button onClick={handleLogin} className="text-sm">
              Log in with Google
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between m-5 ">
          <div className="flex md:w-1/5"></div>
          <div className=" flex flex-col mt-32 w-full md:flex-col  justify-center md:w-1/5 ">
            <div className=" flex  flex-col justify-center ">
              <div className="">
                {/* <p className="text-3xl p-3 m-3 text-center font-serif ">
                  Ai-FliX{" "}
                </p>
                <p className=" text-center font-serif ">
                  The New Cyborg Era of Entertainment .
                </p> */}
                <div className="text-center">
                  <div>
                    <Lottie animationData={animationData} />
                  </div>

                <div class="flex md:flex   rounded-md overflow-hidden md:w-full shadow-lg shadow-indigo-700/100 ">
                  <input
                    type="text"
                    class="w-full text-indigo-700 font-serif font-bold rounded-md text-center rounded-r-none"
                    placeholder="Subscribe for Newsletters"
                  />
                  <button class=" py-4 px-6 overflow-hidden text-md font-semibold  rounded-r-md bg-indigo-700   ">
                    Go
                  </button>
                </div>
                </div>
              </div>
            </div>




          </div>

          <div className="w-1/5"></div>

          <div className="col md:w-4/5 justify-center flex md:flex-col md:justify-center p-10 ">
            <div class="grid grid-col-1 md:grid-rows-3  md:grid-flow-col gap-5 p-10 text-center justify-center ">
              <img
                src={one}
                className="w-64 h-64 p-2 m-2  md:p-8  hover:border-2  rounded-2xl hover:border-white "
              />
              <img
                src={two}
                className="w-64 h-64 p-2 m-2 md:p-8  hover:border-2  rounded-2xl hover:border-white"
              />
              <img
                src={three}
                className="w-64 h-64 p-2 m-2 md:p-8  hover:border-2  rounded-2xl hover:border-white"
              />

              <img
                src={four}
                className="w-64 h-64 p-2 m-2 md:p-8  hover:border-2  rounded-2xl hover:border-white"
              />
              <img
                src={five}
                className="w-64 h-64 p-2 m-2 md:p-8  hover:border-2  rounded-2xl hover:border-white"
              />
              <img
                src={six}
                className="w-64 h-64 p-2 m-2 md:p-8  hover:border-2  rounded-2xl hover:border-white"
              />

              <img
                src={seven}
                className="w-64 h-64 p-2 m-2 md:p-8  hover:border-2  rounded-2xl hover:border-white"
              />
              <img
                src={seven}
                className="w-64 h-64 p-2 m-2 md:p-8  hover:border-2  rounded-2xl hover:border-white"
              />
              <img
                src={seven}
                className="w-64 h-64 p-2 m-2 md:p-8  hover:border-2  rounded-2xl hover:border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
