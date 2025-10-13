import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#c2b5da] dark:bg-gray-800 shadow-md mt-auto">
      <div className="mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              to="https://github.com/ahammad-aly"
              className="text-color hover:text-blue-500 font-bold text-xl"
            >
              GitHub
            </Link>
            <Link
              to="https://www.linkedin.com/in/sa-ahammad-466660321"
              className="text-color hover:text-blue-500 font-bold text-xl"
            >
              LinkedIn
            </Link>
          </div>

          {/* Copyright Notice */}
          <div className="text-center md:text-left">
            <p className="text-color font-extrabold">
              &copy; {new Date().getFullYear()} Ahammad. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
