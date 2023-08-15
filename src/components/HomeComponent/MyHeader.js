import React, { useState  } from "react";
import logo from "../../assets/logo.png";
import "./Styling/MyHeader.css"; // Create a CSS file for styling
import { CgMenuLeftAlt, CgClose, CgLogIn } from "react-icons/cg";
import  {useHistory}  from "react-router-dom";
import { auth } from "../../firebase";
import {Routes, Route, useNavigate} from 'react-router-dom';


function MyHeader() {
  const navigate = useNavigate();

  const [Nav, setNav] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // This tracks button hover

  const handleSignOut = async () => {
    try {

      await auth.signOut();
      // Redirect to the login page or perform any other desired action
      // history.push("/login");
      navigate('/login');

    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const handleNavFunction = () => {
    setNav(!Nav);
  };

  return (
    <header className="justify-between flex  md:flex   bg-mynavyblue text-center border-corner-md drop-shadow-2xl max-w-[1240] mx-auto header-container">
      <div className=" flex">
        <img src={logo} alt="Logo" className="logo md:h-full " />
      </div>
      <div className="hidden md:flex flex-1   mt-1 drop-shadow-2xl ">
        <nav className="nav-menu uppercase ">
          <ul>
            <li className=" hover:bg-red-700">
              <a href="#">Home 🏠</a>
            </li>
            <li className="">
              <a href="#">Search 🔍</a>
            </li>
            <li>
              <a href="#" className="">
                Watchlist 📺
              </a>
            </li>
            <li>
              <a href="#">Originals 🎬</a>
            </li>
            <li>
              <a href="#">Movies 🍿</a>
            </li>
            <li>
              <a href="#">Series 📺</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-none flex  ">
        <div className={!Nav ? "  hidden md:block " : "hidden md:block"}>
          <button
            className="flex items-center text-white text-xl hover:bg-red-700 p-3 m-3 rounded-2xl drop-shadow-2xl"
            onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on hover
            onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on hover exit
          >
            <img
              src={auth.currentUser ? auth.currentUser.photoURL : ""}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            {isHovered && ( // Show the logout icon only when hovered
              <CgLogIn
                className="m-2 text-white"
                size={30}
                onClick={handleSignOut}
              />
            )}
          </button>
        </div>

        <div onClick={handleNavFunction} className="block md:hidden">
          {!Nav ? (
            <CgClose className="m-7 text-white" size={30} />
          ) : (
            <CgMenuLeftAlt className="m-7 text-white" size={30} />
          )}
        </div>
      </div>
      <div
        className={
          !Nav
            ? "z-[100] text-center text-white fixed left-0 top-0 h-auto  rounded-md  border-r-red-200  bg-gray-900 p-2 ease-in-out duration-300 "
            : "fixed hidden left-[-100]  "
        }
      >
        <ul className=" uppercase m-5 text-center ">
          <li className=" hover:bg-red-700 rounded-lg m-6 p-2">
            <a href="#" className=" border-b border-gray-500 m-6 p-2">
              Home 🏠
            </a>
          </li>
          <li className="hover:bg-red-700  rounded-lg m-6 p-2">
            <a href="#" className="border-b border-gray-500 m-6 p-2">
              Search 🔍
            </a>
          </li>
          <li className=" hover:bg-red-700 rounded-lg  m-6 p-2">
            <a href="#" className="border-b border-gray-500 m-6 p-2">
              Watchlist 📺
            </a>
          </li>
          <li className=" hover:bg-red-700  rounded-lg m-5 p-2">
            <a href="#" className="border-b border-gray-500 m-6 p-2">
              Originals 🎬
            </a>
          </li>
          <li className=" hover:bg-red-700 rounded-lg  m-5 p-2">
            <a href="#" className="border-b border-gray-500 m-6 p-2">
              Movies 🍿
            </a>
          </li>
          <li className=" hover:bg-red-700 rounded-lg m-5 p-2">
            <a href="#" className="border-b border-gray-500 m-6 p-2">
              Series 📺
            </a>
          </li>
          <li className=" hover:bg-red-700 rounded-lg m-5 p-2">
            <a
              href="#"
              className="border-b border-gray-500 m-6 p-2"
              onClick={handleSignOut}
            >
              Sign Out 🚪
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MyHeader;
