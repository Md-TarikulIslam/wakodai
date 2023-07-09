import React from "react";
import logo from "../../../assets/images/logo/logo.png";
import logo2 from "../../../assets/images/logo/logo2.gif";
import logo3 from "../../../assets/images/logo/logo3.gif";
import { FaTwitter, FaThumbsUp } from "react-icons/fa";
import "./Header.css";
import { Button, IconButton, Input } from "@material-tailwind/react";
import Modal from "./Modal";
import { FaSearch } from "react-icons/fa";
import Clock from "react-live-clock";

const Header = () => {
  return (
    <div>
      <div className="bg-blue-900 py-2">
        <div className="max-w-screen-xl mx-auto justify-between flex flex-col-reverse lg:flex-row items-center lg:items-end">
          <img className="w-32" src={logo} alt="" />
          <div className="flex flex-col-reverse lg:flex-col main-flex">
            <div className="flex justify-evenly lg:justify-between space">
              <p className="text-white">
                {" "}
                <Clock
                  format={"HH:mm:ss"}
                  ticking={true}
                  timezone={"Africa/Blantyre"}
                />
              </p>
              <Modal />
              <div className="flex gap-2">
                <div className="w-32 lg:w-72">
                  <Input
                    type="email"
                    placeholder="Search"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{
                      className: "min-w-[20px] lg:min-w-[100px]",
                    }}
                  />
                </div>
                <IconButton className="mt-5">
                  <FaSearch />
                </IconButton>
              </div>
            </div>
            <div className="flex flex-col  lg:flex-row items-center lg:justify-between">
              <img className="mr-0 lg:mr-16 mt-7 lg:mt-0" src={logo2} alt="" />
              <div className="flex  items-end">
                <img className="mr-16 w-8 h-8" src={logo3} alt="" />
                <div className="flex  items-center text-sm mr-16  rounded-full justify-between text-white bg-blue-500 px-1 py-0">
                  <span className="mr-1">
                    <FaTwitter />
                  </span>
                  <p>Tweet</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="bg-white rounded-t-sm count">698</p>
                  <div className="flex items-center text-white bg-blue-500 rounded-b-sm px-2">
                    <span className="mr-1">
                      <FaThumbsUp />
                    </span>
                    <p>Like</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
