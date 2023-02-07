import React from "react";
import Contactme from "./Contactme";
import { useLocation, Link } from "react-router-dom";


function NavigationBar() {
  const loc = useLocation();

  return(
    <nav className="flex sticky top-0 z-50 bg-slate-800 items-start justify-between px-24 text-white text-sm gap-12 py-6">
    <Contactme/>
     <div className="flex gap-6">
       <Link to={"/"}>
         <div className={`${loc.pathname === "/"?"font-semibold text-leulePrime border-b-2 border-leulePrime":"font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime"}`}>
           <span>Portfolio</span>
         </div>
       </Link>

       <Link to={"blog"}>
         <div className={`${loc.pathname === "/blog"?"font-semibold text-leulePrime border-b-2 border-leulePrime":"font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime"}`}>
           <span>Blog posts</span>
         </div>
       </Link>
     </div>
   </nav>
  );
}

export default NavigationBar;
