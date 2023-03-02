import topDecor from "./assets/decoration/topDecor.png";
import SkillsCard from "./SkillsCard";
import { ImPaintFormat } from "react-icons/im";
import { RiCodeBoxFill } from "react-icons/ri";
import { GraphicSkillItems, ProgrammingSkillItems } from "./files";

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
          <ImPaintFormat className="text-xl text-leulePrime" />
          <h3 className="text-lg text-white text-center font-semibold tracking-wider m-0 ">
            Design
          </h3>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center align-middle
                px-12 py-6 rounded-lg"
        >
          {GraphicSkillItems.map((graphicX) => (
            <SkillsCard graphic={graphicX} />
          ))}
        </div>
      </div>

      {/* and other develoment skills are below */}

      <div
        className="mx-4 flex flex-col md:w-[650px] md:h-[650px] text-center rounded-md justify-center
        items-center"
      >
        <div className="flex gap-3 items-center justify-center ">
          <RiCodeBoxFill className="text-xl text-leulePrime " />
          <h3 className="text-lg text-white text-center font-semibold tracking-wider">
            Programming
          </h3>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6  justify-center align-middle
            px-12 py-4 rounded-lg"
        >
          {ProgrammingSkillItems.map((graphicX) => (
            <SkillsCard graphic={graphicX} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
