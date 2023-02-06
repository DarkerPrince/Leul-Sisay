import React from 'react'
import { useState } from 'react';
import { BsPersonCircle ,BsTelegram } from "react-icons/bs";
import {AiFillBehanceCircle , AiFillDribbbleCircle , AiFillLinkedin} from "react-icons/ai";
import { IoCall } from "react-icons/io5";


export default function Contactme() {
    const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div className="relative">
    <div
      className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
        justify-start rounded-full px-4"
        onClick={() => setShowDropdown((prev) => !prev)}
    >
      <BsPersonCircle className="bg-cover rounded-full w-6 h-6 mr-2" />
      <span className="text-sm"> Contact me </span>
    </div>
    {
      showDropdown && <>
        <div className="absolute top-full space-y-2 mt-2">
  <div
      className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
        justify-start rounded-full px-4"
    >
      <AiFillBehanceCircle className="bg-cover rounded-full w-6 h-6 mr-2" />
      <span className="text-sm"> Behance </span>
    </div>
    <div
      className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
        justify-start rounded-full px-4"
    >
      <AiFillDribbbleCircle className="bg-cover rounded-full w-6 h-6 mr-2" />
      <span className="text-sm"> Dribbble </span>
    </div>
    <div
      className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
        justify-start rounded-full px-4"
    >
      <AiFillLinkedin className="bg-cover rounded-full w-6 h-6 mr-2" />
      <span className="text-sm"> Linkedin </span>
    </div>
    <div
      className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
        justify-start rounded-full px-4"
    >
      <BsTelegram className="bg-cover rounded-full w-6 h-6 mr-2" />
      <span className="text-sm"> Telegram </span>
    </div>
    <div
      className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
        justify-start rounded-full px-4"
    >
      <IoCall className="bg-cover rounded-full w-6 h-6 mr-2" />
      <span className="text-sm"> +251913427553 </span>
    </div>


  </div>
      </>
    }
    </div>
  )
}
