import blogFiles  from "./files";

import { useNavigate } from "react-router-dom";
import GalleryItem from "./galleryItem";

function WorkGallery() {
  var imageDisplay = blogFiles;
  const navigate = useNavigate();
  
  function navigateMethod(idindex){
    console.log("navigating on the gallery function")
    navigate(`/blog/blogs/${idindex}`);
  }


  return (
    <div id="my_work" className="flex flex-col justify-center h-screen items-center bg-gradient-to-t from-slate-800 to-slate-900 gap-2 w-full overflow-x-clip px-12 py-18">
  
  <div className="mx-4 md:mx-24 flex flex-col items-center justify-center">
        <h2
          className="flex flex-col text-xl lg:text-4xl font-semibold mb-2
            text-leulePrime"
        > UI Galleries
        </h2>
       <div className='w-full overflow-auto scrollbar-hide'>
       <div className="text-sm flex w-max overflow-x-auto gap-3 mb-6">
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

      

      <div className="grid grid-cols-6 w-full gap-3 ">
        <div   className=" relative overflow-hidden row-span-2 rounded-md group">
         
          <GalleryItem val={imageDisplay[1].id}/> 
         
        </div>
        <div  className="relative overflow-hidden  rounded-md group">
        <GalleryItem val={imageDisplay[1].id}/> 
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[2].id)}  className=" relative overflow-hidden row-span-2  rounded-md group">
        <GalleryItem val={imageDisplay[2].id}/> 
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[3].id)}  className=" relative overflow-hidden  rounded-md row-span-3 col-span-3 group">
        <GalleryItem val={imageDisplay[3].id}/> 
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[4].id)}  className=" relative overflow-hidden row-span-2  rounded-md group">
        <GalleryItem val={imageDisplay[4].id}/> 
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[5].id)}  className=" relative overflow-hidden   rounded-md  group">
        <GalleryItem val={imageDisplay[5].id}/> 
        </div>
        <div onClick={()=> navigateMethod(imageDisplay[6].id)}  className=" relative overflow-hidden  rounded-md group">
        <GalleryItem val={imageDisplay[6].id}/> 
        </div>
       
        
      </div>
    </div>
  );
}

export default WorkGallery;
