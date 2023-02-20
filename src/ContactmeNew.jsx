import React, { useState } from 'react'
import { BsPersonCircle, BsTelegram } from "react-icons/bs";
import { AiFillBehanceCircle, AiFillDribbbleCircle, AiFillLinkedin } from "react-icons/ai";
import styles from './contactme.module.css'

export default function ContactmeNew() {
    
    const [position, setPosition] = useState(window.innerWidth <  1024 ?"fixed bottom-[90px] right-[50px] lg:bottom-[100px] lg:right-[100px] " : "relative");
    const [contactDisplay, setContactDisplay] = useState(window.innerWidth <  1024 ? ` ${styles["menu-open-bottom"]} ${styles["ring"]} ${styles["ping"]} ` : ` ${styles["menu-open"]} `)
 

    
    // if( ){
    //   console.log("Screen width of the screen ", window.innerWidth);
    //   setContactDisplay(` ${styles["menu-open-bottom"]} ${styles["ring"]} ${styles["ping"]} `);
    //   setPosition("fixed bottom-[100px] right-[100px] ");
    // }


    window.onscroll = function(){
        var disScroll = document.documentElement.scrollTop;
        console.log("Scrolled " , disScroll);
        console.log("Screen width of the screen ", window.screen.width); 
        if(disScroll > 300 || window.screen.width < 1024){
            console.log("Screen width of the screen ", window.screen.width);
            setContactDisplay(` ${styles["menu-open-bottom"]} ${styles["ring"]} ${styles["ping"]} `);
            setPosition("fixed lg:bottom-[100px] lg:right-[100px] bottom-[90px] right-[50px] ");
         
        }
        else{
            setContactDisplay(` ${styles["menu-open"]}  `); 
            setPosition("relative");
            
        }
    
      }


      function copytoclipboard (){
        navigator.clipboard.writeText("@PrinceMagIV").then(()=> alert("Telegram username copied"));
        console.log("Here copying is done;")
       
    }



  return (
    <div className={` ${position} transition-all duration-300 ease-in-out z-20 `}>

    <nav className={ ` ${styles["menu"]}  `} >
  <input type="checkbox" href="/" className={ ` ${contactDisplay} `}  name="menu-open" id="menu-open"/>
  <label className={ ` ${styles["menu-open-button"]}  `}  htmlFor="menu-open">
    <span className={ ` ${styles["hamburger hamburger-1"]} `} ><BsPersonCircle/></span>
    <span className={ ` ${styles["hamburger hamburger-2"]} `}></span>
    <span className={ ` ${styles["hamburger hamburger-3"]} `}> </span>
  </label>
  
  <a href="https://www.behance.net/luel_sisay" rel="noreferrer" target="_blank" className={ ` ${styles["menu-item"]} `}> <AiFillBehanceCircle/> </a>
  <a href="https://dribbble.com/PrinceMag" className={ ` ${styles["menu-item"]} `}> <AiFillDribbbleCircle/>  </a>
  <a  href="https://www.linkedin.com/in/luel-sisay-637494224/" rel="noreferrer" target="_blank" className={ ` ${styles["menu-item"]} `}> <AiFillLinkedin/>  </a>
  <div className={ ` ${styles["menu-item"]} `}> <BsTelegram onClick={copytoclipboard}/>  </div>
  
    </nav>
</div>  
  )
}


