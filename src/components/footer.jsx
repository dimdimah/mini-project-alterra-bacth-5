// Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-14">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex flex-col space-y-1">
          <h1 className="text-2xl font-semibold">WardrobeFit</h1>
          <p className="text-lg">Discover Your Perfect Fit</p>
          <p className="text-lg">© 2023 WardrobeFit. All rights reserved.</p>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-12">
          <div className="flex flex-col space-y-2">
            <h3 className="mb-2 text-xl font-semibold">Pages</h3>
            <Link to="/" className="text-lg text-gray-900 hover:underline">
              Home
            </Link>
            <Link to="/login" className="text-lg text-gray-900 hover:underline">
              Login
            </Link>
            <Link
              to="/register"
              className="text-lg text-gray-900 hover:underline"
            >
              Register
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="mb-2 text-xl font-semibold">Connect</h3>
            <a href="#" className="flex items-center text-lg hover:underline">
              {" "}
              Twitter
            </a>
            <a href="#" className="flex items-center text-lg hover:underline">
              Instagram
            </a>
            <a href="#" className="flex items-center text-lg hover:underline">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
