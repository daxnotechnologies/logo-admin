import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import pic from "../../assets/images/profile.png";

// import { useStateContext } from "../contexts/ContextProvider";

const Navbar = (props) => {
  // const { unReadMessages } = useStateContext();
  const location = useLocation();

  return (
    <>
      {/* Mobile Navbar */}
      <div className="z-30 md:hidden fixed w-full flex items-center justify-between px-6 h-16 bg-primary-500">
        <button
          onClick={() => {
            props.setOpen(!props.open);
            props.setShowBackdrop(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link
          onClick={() => {
            props.setOpen(false);
            props.setShowBackdrop(false);
          }}
          to={"/chat"}
        >
          {/* <div
          className={`${
            location.pathname === "/chat" ? "opacity-100" : "opacity-20"
          }relative text-primary  hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          {unReadMessages > 0 && (
            <div className="absolute grid place-content-center top-2 right-4 h-5 w-5 bg-red-500 rounded-full">
              <p className="text-white text-sm font-medium">{unReadMessages}</p>
            </div>
          )}
        </div> */}
        </Link>
      </div>

      {/* Desktop Navbar */}
      <div className="z-30 fixed hidden md:pl-52 md:pr-8 md:flex w-full items-center justify-between px-6 pt-10 pb-12 h-16 bg-white">
        {location.pathname === "/home" ||
        location.pathname === "/dashboard/home" ? (
          <div>
            <Search />
          </div>
        ) : (
          <div></div>
        )}

        <div>
          <div
            className={`flex gap-4 items-center hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
          >
            <svg
              width="26"
              height="34"
              viewBox="0 0 26 34"
              className="cursor-pointer"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0021 34C14.8874 34 16.4298 32.4308 16.4298 30.5128H9.5744C9.5744 32.4308 11.0997 34 13.0021 34ZM23.2852 23.5385V14.8205C23.2852 9.46769 20.4745 4.98667 15.5729 3.80103V2.61538C15.5729 1.16821 14.4246 0 13.0021 0C11.5796 0 10.4313 1.16821 10.4313 2.61538V3.80103C5.51257 4.98667 2.71899 9.45026 2.71899 14.8205V23.5385L0.508119 25.7877C-0.571609 26.8862 0.182486 28.7692 1.70782 28.7692H24.2793C25.8046 28.7692 26.5758 26.8862 25.4961 25.7877L23.2852 23.5385Z"
                fill="#013B8D"
              />
            </svg>
            <img className="object-contain h-12 ml-4" src={pic} alt="" />
            <div>
              <p className="text-primary-500 text-lg font-medium">Beyond</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;