import topDecor from "./assets/decoration/topDecor.png";
import figma from "./assets/skills/figma.png";
import css from "./assets/skills/css.png";
import flutter from "./assets/skills/flutter.png";
import html from "./assets/skills/html.png";
import illustrator from "./assets/skills/illustrator.png";
import js from "./assets/skills/js.png";
import photoshop from "./assets/skills/photoshop.png";
import premiere from "./assets/skills/premiere.png";
import reactLogo from "./assets/skills/react.png";
import sketch from "./assets/skills/sketch.png";
import tailwind from "./assets/skills/tailwind.png";
import xd from "./assets/skills/xd.png";
import {ImPaintFormat} from 'react-icons/im';
import {RiCodeBoxFill} from 'react-icons/ri';

function SkillsPage() {
  return (
    <div
      // id="my_skill"
      className=" snap-start flex flex-col bg-slate-900  lg:flex-row gap-2 bg-contain bg-no-repeat
         items-center md:h-[100vh]
        justify-center"
      style={{
        backgroundImage: `url(${topDecor})`,
      }}
    >
      {/* <div
        className="mx-4 flex flex-col md:w-[650px] md:h-[650px] bg-green-200  text-center rounded-md justify-center marker:items-center"
      > 
     
        
      
      </div> */}

      <div
        className="mx-4 flex flex-col md:w-[650px] md:h-[650px] text-center rounded-md justify-center
        items-center"
      >
        <div className="flex gap-3 items-center justify-center ">
      <ImPaintFormat className="text-xl text-leulePrime"/>
      <h3 className="text-lg text-white text-center font-semibold tracking-wider m-0 ">
         Design
        </h3>
      </div>
         <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center align-middle
                px-12 py-6 rounded-lg"
        >
          {/* <!-- 00beff -->
                <!-- 00d47b --> */}
          <div className="flex flex-col bg-gradient-to-br from-[#1c1a1a] to-[#1c1a1a] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                    h-[50px] rounded-md"
              src={figma}
              
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">Figma</span>
            <span className="text-left text-xs text-gray-300">
              for UI Design, brainstorming and creating a flowchart
            </span>
          </div>

          <div className="flex flex-col bg-gradient-to-tr to-[#ff61f6] from-[#470137] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                    h-[50px] rounded-md"
              src={xd}
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">Adobe XD</span>
            <span className="text-left text-xs text-gray-300">
              for UI Design, sharing design contents using links
            </span>
          </div>
          <div className="flex flex-col bg-gradient-to-tr from-[#ea6c00] to-[#fdad00]  rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                    h-[50px] rounded-md"
              src={sketch}
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">Sketch</span>
            <span className="text-left text-xs text-gray-300">
              for UI design
            </span>
          </div>
          <div className="flex flex-col bg-gradient-to-br from-[#310607] to-[#592f30] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                    h-[50px] rounded-md"
              src={illustrator}
              alt="Figma Logo"
            />
            <span className="text-left text-[#ef931b] font-semibold">
              Adobe Illustrator
            </span>
            <span className="text-left text-xs text-gray-300">
              Creating graphic design contents and illustrations
            </span>
          </div>
          <div className="flex flex-col bg-gradient-to-br from-[#001834] to-[#06448b] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                    h-[50px] rounded-md"
              src={photoshop}
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">
              Adobe Photoshop
            </span>
            <span className="text-left text-xs text-gray-300">
              Editing photos and creating design mockups
            </span>
          </div>
          <div className="flex flex-col bg-gradient-to-br from-[#00005b] to-[#383899] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                    h-[50px] rounded-md"
              src={premiere}
              alt="Figma Logo"
            />

            <span className="text-left text-white font-semibold">
              Adobe Premiere
            </span>
            <span className="text-left text-xs text-gray-300">
              Editing videos just like mockup animation
            </span>
          </div>
        </div>
      </div>


      {/* <!-- <h1 className="flex flex-col text-7xl text-orange-50 font-semibold
            mx-8">
            &
        </h1> --> */}
      <div
        className="mx-4 flex flex-col md:w-[650px] md:h-[650px] text-center rounded-md justify-center
        items-center"
      >
         <div className="flex gap-3 items-center justify-center ">
      <RiCodeBoxFill className="text-xl text-leulePrime "/>
      <h3 className="text-lg text-white text-center font-semibold tracking-wider">
         Programming
        </h3>
         </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6  justify-center align-middle
            px-12 py-4 rounded-lg"
        >
          <div className="flex flex-col rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start bg-gradient-to-br from-[#027DFD] to-[#0553B1]">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                h-[50px] rounded-md"
              src={flutter}
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">Flutter</span>
            <span className="text-left text-xs text-gray-300">
              Crossplatform Mobile application development framework
            </span>
          </div>
          
          <div className="flex flex-col bg-gradient-to-br from-[#0b6981] to-[#3d9db5] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                h-[50px] rounded-md"
              src={reactLogo}
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">React</span>
            <span className="text-left text-xs text-gray-300">
              Web application Development framework
            </span>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-[#8d2a12] to-[#e34c26] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                h-[50px] rounded-md"
              src={html}
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">HTML</span>
            <span className="text-left text-xs text-gray-300">
              Frontend web development / HTML5
            </span>
          </div>
          <div className="flex flex-col bg-gradient-to-tr from-[#027DFD] to-[#0553B1] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                h-[50px] rounded-md"
              src={css}
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">CSS</span>
            <span className="text-left text-xs text-gray-300">
              Frontend web development styling ui components
            </span>
          </div>
          <div className="flex flex-col bg-gradient-to-br from-[#f99b34] to-[#f48131] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                h-[50px] rounded-md"
              src={js}
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">
              Javascript
            </span>
            <span className="text-left text-xs text-gray-300">
              Frontend web development ES6
            </span>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-[#027DFD] to-[#0553B1] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out p-4  gap-2 items-start">
            <img
              className="flex bg-no-repeat bg-contain w-[50px]
                h-[50px] rounded-md"
              src={tailwind}
              alt="Figma Logo"
            />
            <span className="text-left text-white font-semibold">Tailwind</span>
            <span className="text-left text-xs text-gray-300">
              Frontend web development and coding UI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
