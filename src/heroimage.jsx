import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
    hidden : {rotate  : 4 },
    visible : {
        rotate : 0,
        transition : { duration : 1,
          ease : "easeInOut"
        }
    }
}
const pathVariants = {
    hidden : {
        
        pathLength : 0,
        transition : { 
          repeat: Infinity,
            repeatType: "reverse",
            duration : 10,
            ease : "easeInOut"
        
        }
    },
    visible : {
        
        pathLength : 1,
        transition : { 
          repeat: Infinity,
            repeatType: "reverse",
            duration : 10,
            ease : "easeInOut"
        
        }
    }
}


function Heroimage() {
  return (
    <div className="bg-green">
      <motion.svg
        id="Layer_2"
        data-name="Layer 2"
        className=" fill-leulePrime w-full  md:w-[540px] object-contain "
        viewBox="0 0 1062.53 1018"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      > 
       <defs>  
        <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
            
            <stop offset="0%" stop-color="#7A5FFF">
                <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
            </stop>

            <stop offset="100%" stop-color="#01FF89">
                <animate attributeName="stop-color" values="#01FF89; #7A5FFF; #01FF89" dur="4s" repeatCount="indefinite"></animate>
            </stop>

        </linearGradient> 

    </defs>

    {/* stroke = "#1e293b" */}

        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <motion.path
            variants={pathVariants}
            stroke = "#fd1b53"
            strokeWidth={3}
            str
            fill="url('#logo-gradient')"
             strokeLinecap="round"
             strokeLinejoin="round"
              className ="cls-1 bg-white"
              
            >
              < animate attributeName="d" dur={10} repeatCount='indefinite'
              values="
              M579.94,160.98c87.12-.53,152.63,11.89,213.57,43.1,86.7,44.4,145.62,111.51,164,209.25,10.56,56.15,4.03,111.54-15.51,165-52.08,142.47-152.33,239.21-290.01,297.9-107.99,46.04-219.47,56.23-332.64,19.44-79.86-25.96-146.53-71.61-196.46-139.82-78.94-107.83-83.5-242.7-12.46-355.93,37.82-60.29,89.16-106.8,149.74-143.11,104.15-62.42,217.77-92.38,319.78-95.84Z;
              M 579.94 160.98 c 87.12 -0.53 98.06 38.02 213.57 43.1 c 142.49 43.92 151.49 108.92 164 209.25 c -5.51 58.67 25.49 102.67 -15.51 165 c -144 111.67 -93 212.67 -290.01 297.9 c -107.99 46.04 -219.47 56.23 -332.64 19.44 c -79.86 -25.96 -146.53 -71.61 -196.46 -139.82 c -96.89 -201.85 -70.89 -238.85 -12.46 -355.93 c 47.57 -80.92 81.57 -64.92 149.74 -143.11 c 77.83 -81.81 189.83 -55.81 319.78 -95.84 Z;

              M 579.94 160.98 c 76.06 -6.98 55.06 33.02 213.57 43.1 c 116.49 28.92 135.49 78.92 164 209.25 c -5.51 58.67 4.49 113.67 -15.51 165 c -17 108.67 -148 230.67 -290.01 297.9 c -95.99 32.77 -201.99 55.77 -332.64 19.44 c -79.86 -25.96 -146.53 -71.61 -196.46 -139.82 c -75.89 -125.85 -32.89 -316.85 -12.46 -355.93 c 47.57 -80.92 83.57 -49.92 149.74 -143.11 c 104.83 -102.81 148.83 -48.81 319.78 -95.84 Z;
              
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
