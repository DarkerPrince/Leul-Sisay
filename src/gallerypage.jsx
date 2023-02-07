import { uiImages } from "./files";

function WorkGallery() {
  var imageDisplay = uiImages;
  return (
    <div id="my_work">
      <div className="mx-24">
        <h2
          className="flex flex-col text-xl lg:text-4xl font-semibold mb-2
            text-leulePrime"
        >
          My works
        </h2>
        <div className="text-sm flex flex-wrap gap-3 mb-6">
          <div className="tag-selected">UI Design</div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Developed</span>{" "}
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Case Studies</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Business Cards</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Booklets</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Banners</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Social Media Posts</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Logo Designs</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Others</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 w-full gap-3">
        <div className="relative overflow-hidden  rounded-md col-start-1 col-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {`${imageDisplay[0].id}`} Coop Feedback collector app
            </p>
            <p className=" flex items-center justify-center text-xs font-light">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover bg-center w-full h-full object-cover bg-no-repeat group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden rounded-md
            col-start-1 col-span-2"
            src={`${imageDisplay[0].picture[0]}`}
            title="COOP bank is the best ⭐🌟🌟"
            alt=""
            srcset=""
          />
        </div>
        <div className="relative overflow-hidden  rounded-md row-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out hovergroup-hover:delay-100 hover:bg-fit bg-center  rounded-md"
            src={`${imageDisplay[1].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md row-span-2 col-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[2].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md row-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out hovergroup-hover:delay-100 group-hover:bg-fit rounded-md bg-center"
            src={`${imageDisplay[3].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-sm font-medium">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[4].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md row-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out hovergroup-hover:delay-100 group-hover:bg-fit bg-center rounded-md"
            src={`${imageDisplay[5].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[6].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md col-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md "
            src={`${imageDisplay[7].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md col-span-2 row-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md "
            src={`${imageDisplay[8].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md col-span-2 group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[9].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md group">
          <div className="invisible pt-4 group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[10].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
        <div className=" relative overflow-hidden  rounded-md group">
          <div className="invisible group-hover:visible group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute text-white h-full w-full z-10 bg-gradient-to-b from-slate-800 to-slate-800/10">
            <p className=" flex items-center justify-center text-sm font-medium text-leulePrime">
              {imageDisplay[0].id}
            </p>
            <p className=" flex items-center justify-center text-xs font-light ">
              Content of the display here also
            </p>
          </div>
          <img
            className="bg-cover w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:bg-fit rounded-md"
            src={`${imageDisplay[11].picture[0]}`}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}

export default WorkGallery;
