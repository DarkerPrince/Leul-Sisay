import React from "react";
import { useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

function NavigationBar() {
  // let { id } = useParams();
  const loc = useLocation();

  switch (loc.pathname) {
    case "/":
      return (
        <nav className="flex sticky top-0 z-50 bg-gray-800 items-center justify-between px-24 text-white text-sm gap-12 py-6">
          <div
            className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
              justify-center rounded-full px-4"
          >
            <BsPersonCircle className="bg-cover rounded-full w-6 h-6 mr-2" />
            <span className="text-sm"> Contact me </span>
          </div>
          <div className="flex gap-6">
            <a href="/">
              <div className="font-semibold text-leulePrime border-b-2 border-leulePrime">
                <span>Portfolio</span>
              </div>
            </a>

            <a href="blog">
              <div className="font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime">
                <span>Blog posts</span>
              </div>
            </a>

            <a href="blogs">
              <div className="font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime">
                <span>Go to</span>
              </div>
            </a>
          </div>
        </nav>
      );
    case "/blog":
      return (
        <nav className="flex sticky top-0 z-50 bg-gray-800 items-center justify-between px-24 text-white text-sm gap-12 py-6">
          <div
            className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
                justify-center rounded-full px-4"
          >
            <BsPersonCircle className="bg-cover rounded-full w-6 h-6 mr-2" />
            <span className="text-sm"> Contact me </span>
          </div>
          <div className="flex gap-6">
            <a href="/">
              <div className="font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime">
                <span>Portfolio</span>
              </div>
            </a>

            <a href="blog">
              <div className="font-semibold text-leulePrime border-b-2 border-leulePrime">
                <span>Blog posts</span>
              </div>
            </a>

            <a href="blog">
              <div className="font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime">
                <span>Go to</span>
              </div>
            </a>
          </div>
        </nav>
      );
  }
}

export default NavigationBar;
