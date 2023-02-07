import React from 'react'
import { useState } from 'react';
import { BsPersonCircle, BsTelegram } from "react-icons/bs";
import { AiFillBehanceCircle, AiFillDribbbleCircle, AiFillLinkedin } from "react-icons/ai";
import { IoCall } from "react-icons/io5";


export default function Contactme() {
  const [showDropdown, setShowDropdown] = useState(false);
  

function copytoclipboard (){
    navigator.clipboard.writeText("@PrinceMagIV").then(()=> alert("Telegram username copied"));
    console.log("Here copying is done;")
   
}
  



  return (
    <div className="relative">
      <div
        className="flex delay-500 items-center h-12 w-12 md:w-auto text-white shadow-md bg-leulePrime
        md:justify-start  justify-center  rounded-full md:px-4"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <BsPersonCircle className="bg-cover rounded-full w-6 h-6 md:mr-2" />
        <span className="text-sm md:block hidden"> Contact me </span>
      </div>
      {
        showDropdown && <>
          <div className="absolute top-full space-y-2 mt-2">

              <div
                className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
      justify-start rounded-full px-4"
              >
                <AiFillBehanceCircle className="bg-cover rounded-full w-6 h-6 mr-2" />
            <a href="https://www.behance.net/luel_sisay" rel="noreferrer" target="_blank">
                <span className="text-sm"> Behance </span>
            </a>
              </div>


              <div
                className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
                justify-start rounded-full px-4"
              >
                <AiFillDribbbleCircle className="bg-cover rounded-full w-6 h-6 mr-2" />
                <a href="https://dribbble.com/PrinceMag">
                <span className="text-sm"> Dribbble </span>
            </a>
              </div>

            <div
              className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
        justify-start rounded-full px-4"
            >
              <AiFillLinkedin className="bg-cover rounded-full w-6 h-6 mr-2" />
            <a href="https://www.linkedin.com/in/luel-sisay-637494224/" rel="noreferrer" target="_blank">

              <span className="text-sm"> Linkedin </span>
            </a>
            </div>
            <div
              className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
        justify-start rounded-full px-4"
        onClick={copytoclipboard}
            >
              <BsTelegram className="bg-cover rounded-full w-6 h-6 mr-2" />
              <span className="text-sm"> @PrinceMagIV </span>
            </div>
            <div
              className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
        justify-start rounded-full px-4"
            >
              <IoCall className="bg-cover rounded-full w-6 h-6 mr-2" />
              <a href="tel:+251913427553">
              <span className="text-sm"> +251913427553 </span>
              </a>
            </div>


          </div>
        </>
      }
    </div>
  )
}
