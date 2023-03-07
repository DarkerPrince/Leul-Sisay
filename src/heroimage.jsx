import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
    hidden : {rotate  : -180 },
    visible : {
        rotate : 0,
        transition : { duration : 1}
    }
}
const pathVariants = {
    hidden : {
        opacity :0,
        pathLength : 0
    },
    visible : {
        opacity :1,
        pathLength : 1,
        transition : { 
            duration : 4,
            ease : "easeInOut"
        
        }
    }
}


function Heroimage() {
  return (
    <div>
      <motion.svg
        id="Layer_2"
        data-name="Layer 2"
        className="fill-leulePrime md:w-[540px] object-contain "
        viewBox="0 0 962.53 918"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <motion.path
            variants={pathVariants}
              class="cls-1"
              d="M579.94,160.98c87.12-.53,152.63,11.89,213.57,43.1,86.7,44.4,145.62,111.51,164,209.25,10.56,56.15,4.03,111.54-15.51,165-52.08,142.47-152.33,239.21-290.01,297.9-107.99,46.04-219.47,56.23-332.64,19.44-79.86-25.96-146.53-71.61-196.46-139.82-78.94-107.83-83.5-242.7-12.46-355.93,37.82-60.29,89.16-106.8,149.74-143.11,104.15-62.42,217.77-92.38,319.78-95.84Z"
            />
            <image
              width="3668"
              height="3672"
              transform="scale(.25)"
              href="https://www.linkpicture.com/q/profile_23.png"
            />
          </g>
        </g>
      </motion.svg>
    </div>
  );
}

export default Heroimage;
