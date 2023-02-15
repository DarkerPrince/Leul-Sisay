import React from "react";
import logo from "./assets/company/mylogo.svg";
import { useLocation, Link } from "react-router-dom";


function NavigationBar() {
  const loc = useLocation();

  return(
    <nav className="flex sticky top-0 z-[100] bg-slate-800/20 items-center justify-between px-6 md:px-24 text-white text-sm gap-12 py-6">
     <img src={logo} alt="Logo" className="h-8" />
     <div className="flex gap-6">
       <Link to={"/"}>
         <div className={`${loc.pathname === "/"?"font-semibold text-leulePrime border-b-2 border-leulePrime":"font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime"}`}>
           <span>Portfolio</span>
         </div>
       </Link>

       <Link to={"blog"}>
         <div className={`${loc.pathname === "/blog"?"font-semibold text-leulePrime border-b-2 border-leulePrime":"font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime"}`}>
           <span className="w-full">Blog posts</span>
         </div>
       </Link>
     </div>
   </nav>
  );
}

export default NavigationBar;
