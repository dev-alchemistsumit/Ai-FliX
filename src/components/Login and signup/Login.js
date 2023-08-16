import React from "react";
import { auth, GoogleAuthProvider, signInWithPopup } from "../../firebase";
import logo from "../../assets/logo.png";
// import { CarouselItem, AdvancedCarousel } from "./AdvancedCarousel";
// import {Carousel} from '3d-react-carousal';
// import Carousel from "react-spring-3d-carousel";

import one from "../../assets/loginPage Images/one.png";
import two from "../../assets/loginPage Images/two.png";
import three from "../../assets/loginPage Images/three.png";
import four from "../../assets/loginPage Images/four.png";
import five from "../../assets/loginPage Images/five.png";
import six from "../../assets/loginPage Images/six.png";
import seven from "../../assets/loginPage Images/seven.png";
import eight from "../../assets/loginPage Images/eight.png";
import nine from "../../assets/loginPage Images/nine.png";
import ten from "../../assets/loginPage Images/ten.png";
import eleven from "../../assets/loginPage Images/eleven.png";
import twelve from "../../assets/loginPage Images/twelve.png";
import ai from "../../assets/loginPage Images/Ai.png";
import thirteen from "../../assets/loginPage Images/thirteen.png";

import Lottie from "lottie-react";
import animationData from "../../assets/animation/netflixAnimation.json";
import parrot from "../../assets/animation/parrot.json";
import Footer from "../HomeComponent/Footer";

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

  const images = [
    twelve,
    eleven,
    thirteen,
    ten,
    nine,
    eight,
    seven,
    six,
    five,
    four,
    three,
    two,
    one,
  ];

  return (
    <div className=" h-full md:h-full flex flex-col md:">
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

        <div className="flex flex-col md:flex-row justify-center m-5 ">
          <div className="flex md:w-1/5 justify-center"></div>

          <div className=" flex flex-col overflow-visible w-full md:flex-col  justify-center md:w-1/5 ">
            <div className=" flex  flex-col justify-center ">
              <div className="">
                {/* <p className="text-3xl p-3 m-3 text-center font-serif ">
                  Ai-FliX{" "}
                </p>
                <p className=" text-center font-serif ">
                  The New Cyborg Era of Entertainment .
                </p> */}
                <div className="text-center justify-center">
                  <div>
                    <Lottie animationData={animationData} />
                  </div>

                  <div class="flex md:flex   rounded-md overflow-visible md:w-full shadow-lg shadow-indigo-700/100 ">
                    <input
                      type="text"
                      class="w-full text-indigo-700 font-serif font-bold text-sm md:text- rounded-md text-center rounded-r-none"
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

          <div className=""></div>

          <div className="col md:w-4/5  justify-center flex md:flex-col md:justify-center p-10 ">
            {" "}
            <div className="text-center justify-center overflow-visible">
              <div className=" shadow-lg shadow-indigo-700/100 p-5 ">
                <div className=" shadow-lg shadow-indigo-700/100 p-5">
                  <div className=" shadow-lg shadow-indigo-700/100 p-5">
                    <div className=" shadow-lg shadow-indigo-700/100 p-5">
                      <div className=" shadow-lg shadow-indigo-700/100 p-5">
                        <div className=" shadow-lg shadow-indigo-700/100 p-5">
                          <div className=" shadow-lg shadow-indigo-700/100 p-5">
                            <div className=" shadow-lg shadow-indigo-700/100 p-5">
                              <div className=" shadow-lg shadow-indigo-700/100 p-5">
                  

                                <div className=" md:h-auto  shadow-lg shadow-indigo-700/100 p-5">
                                  <Lottie
                                    animationData={parrot}
                                    className="  md:h-screen  shadow-lg shadow-indigo-700/100 overflow-visible "
                                  />
                                </div>
                   

                          </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-center justify-center p-5 m-5 text-center flex justify-center ">
          {/* <Carousel slides={slides} /> */}

          <div class="grid grid-cols-1 md:grid-cols-5  md:gap-10 text-center justify-center ">
            <img
              src={thirteen}
              className="p-5 m-5 h-64 w-64   hover:border-2  rounded-2xl hover:border-white"
            />
            <img
              src={nine}
              className="p-5 m-5 h-64 w-64  hover:border-2  rounded-2xl hover:border-white"
            />
            <img
              src={ai}
              className="p-5 m-5 h-64 w-64  hover:border-2  rounded-2xl hover:border-white"
            />
            <img
              src={six}
              className="p-5 m-5 h-64 w-64  hover:border-2  rounded-2xl hover:border-white"
            />
            <img
              src={ten}
              className="p-5 m-5 h-64 w-64  hover:border-2  rounded-2xl hover:border-white"
            />

            <img
              src={eight}
              className="p-5 m-5 h-64 w-64  hover:border-2  rounded-2xl hover:border-white"
            />
            <img
              src={eleven}
              className="p-5 m-5 h-64 w-64  hover:border-2  rounded-2xl hover:border-white"
            />
            <img
              src={seven}
              className="p-5 m-5 h-64 w-64  hover:border-2  rounded-2xl hover:border-white"
            />
            <img
              src={twelve}
              className="p-5 m-5 h-64 w-64  hover:border-2  rounded-2xl hover:border-white"
            />
            <img
              src={one}
              className="p-5 m-5 h-64 w-64  hover:border-2  rounded-2xl hover:border-white"
            />
          </div>
        </div>
        <div className="m-5 p-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
