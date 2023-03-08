import blogFiles , { socialMediaPost }  from "./files";
import GalleryBox from "./GalleryBox";
import { useState  } from "react";

function WorkGallery() {
  const [ imageDisplayOG , setImageDisplay ] =  useState(blogFiles);
 
   

  const changeDisplay = (loc) =>{
    console.log(" the Image display is changed from " , loc);
    console.log("The old Array is ", imageDisplayOG);
    setImageDisplay(socialMediaPost);
    console.log("The new Array is ", imageDisplayOG);
  }


 
  return (
    <div id="my_work" className=" snap-start flex  flex-col justify-center lg:h-screen py-16 lg:py-0 items-center bg-gradient-to-t from-slate-800 to-slate-900 gap-2  w-full px-12 py-18">
  
  <div className="mx-4 md:mx-24 flex flex-col items-center justify-center">
        <h2
          className="flex flex-col text-xl lg:text-4xl font-semibold mb-2
            text-leulePrime"
        > My Works
        </h2>
       <div className='w-screen lg:w-full overflow-auto scrollbar-hide px-6'>
       <div className="text-sm  flex w-max gap-3 mb-6">
          <div className="tag-selected ">UI Design</div>
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
           onClick={()=>changeDisplay("social media")}
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
      </div>

      

      <GalleryBox imageDisplay = {imageDisplayOG}/>
    </div>
  );
}

export default WorkGallery;
