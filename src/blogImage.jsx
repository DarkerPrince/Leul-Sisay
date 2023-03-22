

import React, { useRef, useEffect } from "react";
import "./revealImage.scss"
import CSSRulePlugin from "gsap/CSSRulePlugin";

import { TimelineLite, Power2 } from "gsap";

function BlogImage({ file }) {

  

    let image = useRef(null);
    let container = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  
    let tl = new TimelineLite();

    useEffect(() => {
        console.log("Here the animations are supposed to animate")
        tl.to(container, 0, { css: { visibility: "visible" } });
        tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
        tl.from(image, 1.4, {
          scale: 1.6,
          ease: Power2.easeInOut,
          delay: -1.4
        });
      });


  return (
    <div className="main">
    <div ref={el => (container = el)} className="flex rounded-lg overflow-hidden  items-center w-full m-0 h-100vh">
      <>
        <div  className="img-container w-full h-64 bg-slate-700">
          <img
            ref={el => (image = el)}
            src={`${file.imageID[0]}`}
            loading="lazy"
            alt={file.title + " here"}
            className={` absolute top-0  left-0 rounded-lg mb-4 hover:scale-110  opacity-100 transition-all duration-[0.2s] ease-in-out text-black object-cover h-64`}
          />
        </div>
      </>
    </div>
    </div>
  );
}

export default BlogImage;
