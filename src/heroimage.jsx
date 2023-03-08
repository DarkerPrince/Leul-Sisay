import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
    hidden : {rotate  : 10 },
    visible : {
        rotate : 0,
        transition : { duration : 1,
          ease : "easeInOut"
        }
    }
}
const pathVariants = {
    hidden : {
        
        pathLength : 0
    },
    visible : {
        
        pathLength : 1,
        transition : { 
          repeat: Infinity,
           repeatDelay: 9 ,
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
        className=" fill-leulePrime   md:w-[540px] object-contain "
        viewBox="0 0 1062.53 1018"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      > 
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <motion.path
            variants={pathVariants}
            stroke = "#1e293b"
            strokeWidth={14}
            
             strokeLinecap="round"
             strokeLinejoin="round"
              className ="cls-1 bg-white"
              
            >
              < animate attributeName="d" dur={10} repeatCount='indefinite'
              values="
              M579.94,160.98c87.12-.53,152.63,11.89,213.57,43.1,86.7,44.4,145.62,111.51,164,209.25,10.56,56.15,4.03,111.54-15.51,165-52.08,142.47-152.33,239.21-290.01,297.9-107.99,46.04-219.47,56.23-332.64,19.44-79.86-25.96-146.53-71.61-196.46-139.82-78.94-107.83-83.5-242.7-12.46-355.93,37.82-60.29,89.16-106.8,149.74-143.11,104.15-62.42,217.77-92.38,319.78-95.84Z;
              M 579.94 160.98 c 128.06 92.02 141.06 39.02 213.57 43.1 c 95.49 9.92 165.49 69.92 164 209.25 c -7.51 55.67 -46.51 43.67 -15.51 165 c 13 68.67 -152.33 239.21 -290.01 297.9 c -107.99 46.04 -219.47 56.23 -332.64 19.44 c -79.86 -25.96 -146.53 -71.61 -196.46 -139.82 c -78.94 -107.83 -83.5 -242.7 -12.46 -355.93 c 37.82 -60.29 89.16 -106.8 149.74 -143.11 c 104.15 -62.42 231.83 -151.81 319.78 -95.84 Z;

              M 579.94 160.98 c 86.06 49.02 141.06 39.02 213.57 43.1 c 95.49 9.92 165.49 69.92 164 209.25 c -7.51 55.67 -31.51 45.67 -15.51 165 c 21 155.67 -141 241.67 -290.01 297.9 c -71.99 21.77 -164.99 -26.23 -332.64 19.44 c -99.35 39.33 -146.53 -71.61 -196.46 -139.82 c -72.89 -131.85 -82.89 -324.85 -12.46 -355.93 c 118.57 -72.92 129.57 -110.92 149.74 -143.11 c 32.83 -38.81 229.83 -134.81 319.78 -95.84 Z;
              M579.94,160.98c87.12-.53,152.63,11.89,213.57,43.1,86.7,44.4,145.62,111.51,164,209.25,10.56,56.15,4.03,111.54-15.51,165-52.08,142.47-152.33,239.21-290.01,297.9-107.99,46.04-219.47,56.23-332.64,19.44-79.86-25.96-146.53-71.61-196.46-139.82-78.94-107.83-83.5-242.7-12.46-355.93,37.82-60.29,89.16-106.8,149.74-143.11,104.15-62.42,217.77-92.38,319.78-95.84Z;
              

              
              
              "
              />
              </motion.path>

           
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
