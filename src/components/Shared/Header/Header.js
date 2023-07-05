import React from "react";
import logo from "../../../assets/images/logo/logo.png";
import logo2 from "../../../assets/images/logo/logo2.gif";
import logo3 from "../../../assets/images/logo/logo3.gif";
import { FaTwitter, FaThumbsUp } from "react-icons/fa";
import "./Header.css";
import { Input } from "@material-tailwind/react";
import Modal from "./Modal";

const Header = () => {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return (
    <div>
      <div className="bg-blue-600 ">
        <div className="max-w-screen-xl mx-auto justify-between flex items-end">
          <img className="w-32" src={logo} alt="" />
          <div className="flex flex-col main-flex">
            <div className="flex justify-between space">
              <p className="text-white">{showTime}</p>
              <Modal />
              <div className="w-72">
                <Input
                  type="email"
                  placeholder="Search"
                  className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <img className="mr-16" src={logo2} alt="" />
              <div className="flex items-end">
                <img className="mr-16 w-8 h-8" src={logo3} alt="" />
                <div className="flex items-center text-sm mr-16  rounded-full justify-between text-white bg-blue-500 px-1 py-0">
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
