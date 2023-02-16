import blogFiles  from "./files";
import { useNavigate } from "react-router-dom";

function WorkGallery() {
  var imageDisplay = blogFiles;
  const navigate = useNavigate();
  
  function navigateMethod(idindex){
    console.log("navigating on the gallery function")
    navigate(`/blog/blogs/${idindex}`);
  }


  return (
    <div id="my_work" className="bg-red-400">
  
      <div className="mx-4 md:mx-24 bg-violet-300 ">
      
        <h2
          className="flex flex-col text-xl lg:text-4xl font-semibold mb-2
            text-leulePrime"
        > My works
        </h2>
        <div className="text-sm flex w-full overflow-x-auto gap-3 mb-6">
          <div className="tag-selected w-max">UI Design</div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span className="w-max">Developed</span>{" "}
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span className="w-max">Case Studies</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span className="w-max">Business Cards</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span className="w-max">Booklets</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span className="w-max">Banners</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span className="w-max">Social Media Posts</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span className="w-max">Logo Designs</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span className="w-max">Others</span>
          </div>
        </div>
      </div>

      

      <div className="grid grid-cols-6 w-full gap-3 bg-green-300">
        <div onClick={()=> navigateMethod(imageDisplay[0].id) } 
        className="relative overflow-hidden bg-red-300  rounded-md col-start-1 col-span-2 group">
          <div 
            
          className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
            {`#${imageDisplay[0].id} `} {`${imageDisplay[0].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light">
            {`${imageDisplay[0].hint}`}
            </p>
          </div>
          <img
            className="bg-cover bg-center w-full h-full object-cover bg-no-repeat group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden rounded-md
            col-start-1 col-span-2"
            src={`${imageDisplay[0].imageID[0]}`}
            title="COOP bank is the best ⭐🌟🌟"
           alt={" here"}
          />
        </div>
        <div onClick={()=>navigateMethod(imageDisplay[1].id) }  className="relative overflow-hidden  rounded-md row-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[1].id} `} {`${imageDisplay[1].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[1].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out hovergroup-hover:delay-100 hover:bg-fit bg-center  rounded-md"
            src={`${imageDisplay[1].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[2].id)}  className=" relative overflow-hidden  rounded-md row-span-2 col-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[2].id} `} {`${imageDisplay[2].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[2].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[2].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[3].id)}  className=" relative overflow-hidden  rounded-md row-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[3].id} `} {`${imageDisplay[3].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[3].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out hovergroup-hover:delay-100 group-hover:bg-fit rounded-md bg-center"
            src={`${imageDisplay[3].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[4].id)}  className=" relative overflow-hidden  rounded-md group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[4].id} `} {`${imageDisplay[4].title}`}
            </p>
            <p className=" flex items-center justify-center text-sm font-medium">
             {`${imageDisplay[4].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[4].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[5].id)}  className=" relative overflow-hidden  rounded-md row-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[5].id} `} {`${imageDisplay[5].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[5].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out hovergroup-hover:delay-100 group-hover:bg-fit bg-center rounded-md"
            src={`${imageDisplay[5].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[6].id)}  className=" relative overflow-hidden  rounded-md group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[6].id} `} {`${imageDisplay[6].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[6].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[6].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=>navigateMethod(imageDisplay[7].id)}  className=" relative overflow-hidden  rounded-md col-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[7].id} `} {`${imageDisplay[7].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[7].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md "
            src={`${imageDisplay[7].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[8].id)}  className=" relative overflow-hidden  rounded-md col-span-2 row-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[8].id} `} {`${imageDisplay[8].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[8].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md "
            src={`${imageDisplay[8].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=>navigateMethod(imageDisplay[9].id)}  className=" relative overflow-hidden  rounded-md col-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[9].id} `} {`${imageDisplay[9].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[9].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[9].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[10].id) } className=" relative overflow-hidden  rounded-md group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[10].id} `} {`${imageDisplay[10].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[10].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[10].imageID[0]}`}
           alt={" here"}
          />
        </div>
        <div onClick={()=>navigateMethod(imageDisplay[11].id)  } className=" relative overflow-hidden  rounded-md group">
          <div className="invisible group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
               {`#${imageDisplay[11].id} `} {`${imageDisplay[11].title}`}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
             {`${imageDisplay[11].hint}`}
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[11].imageID[0]}`}
           alt={" here"}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkGallery;
