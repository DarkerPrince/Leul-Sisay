import React from "react";
import logo from "./assets/company/mylogo.svg";


import { useLocation, Link } from "react-router-dom";



function NavigationBar() {
  const loc = useLocation();

  return(
    <nav className="flex z-[100] bg-slate-800/10 items-center justify-between px-6 md:px-24 text-white text-sm gap-12 py-6">
     
     <Link to={"/"}>
     <div className="flex flex-col md:flex-row items-center justify-center md:gap-1">

     <img src={logo} alt="Logo" className="h-16 w-16  object-cover" />
     <p className="text-sm md:text-lg  lg:text-2xl font-leuleFont text-slate-700 font-semibold ">Luel Sisay</p>
     
     </div>
     </Link>
    
     
     <div className="flex gap-6">
       <Link to={"/"}>
         <div className={`${loc.pathname === "/"?"font-semibold text-leulePrime border-b-2 border-leulePrime":"font-regular text-slate-400 hover:text-leulePrime hover:border-b-2 hover:border-leulePrime"}`}>
           <span>Portfolio</span>
         </div>
       </Link>

       <Link to={"blog"}>
         <div className={`${loc.pathname === "/blog"?"font-semibold text-leulePrime border-b-2 border-leulePrime":"font-regular text-slate-400 hover:text-leulePrime hover:border-b-2 hover:border-leulePrime"}`}>
           <span className="w-full">Blog posts</span>
         </div>
       </Link>
     </div>
   </nav>
  );
}

export default NavigationBar;
