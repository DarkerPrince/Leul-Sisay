import blogFiles , { socialMediaPost , VisualDesigns }  from "../../assets/files";
import GalleryBox from "./GalleryBox";
import { useState  } from "react";

function WorkGallery() {
  const [ imageDisplayOG , setImageDisplay ] =  useState(blogFiles);
  const [buttonsSelected , setbuttonsSelected] = useState([true, false , false]);
 
   

  const changeDisplay = (loc) =>{
    let arrayButtonsView  = [];
    switch(loc){
      case 'uiux':
        console.log(" the Image display is changed from " , loc);
        console.log("Array is ", blogFiles);
        setImageDisplay(blogFiles);
         arrayButtonsView = [true , false , false];
        setbuttonsSelected(arrayButtonsView);
        break;

        case 'visual':
        console.log(" the Image display is changed from " , loc);
        console.log("Array is ", VisualDesigns);
        setImageDisplay(VisualDesigns);
        arrayButtonsView = [false , true , false];
        setbuttonsSelected(arrayButtonsView);
        break;

        case 'social':
        console.log(" the Image display is changed from " , loc);
        setImageDisplay(socialMediaPost);
        console.log("Array is ", socialMediaPost);
        arrayButtonsView = [false , false , true];
        setbuttonsSelected(arrayButtonsView);
        break;

        default:
          console.log(" default " , loc);
        console.log("Array is ", blogFiles);
        setImageDisplay(blogFiles);
         arrayButtonsView = [true , false , false];
        setbuttonsSelected(arrayButtonsView);
        break;

    }

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
          <div
          onClick={()=>changeDisplay("uiux")}
          className={buttonsSelected[0]?"tag-selected ": "tag3 hover:shadow-lg hover:bg-leulePrime hover:text-white" }>UI-Design and Developed</div>

          <div
            onClick={()=>changeDisplay("visual")}
            className={buttonsSelected[1]?"tag-selected ": "tag3 hover:shadow-lg hover:bg-leulePrime hover:text-white" }
          >
            <span className="w-max">Visual Designs</span>{" "}
          </div>
          <div
           onClick={()=>changeDisplay("social")}
           className={buttonsSelected[2]?"tag-selected ": "tag3 hover:shadow-lg hover:bg-leulePrime hover:text-white" }
          >
            <span className="w-max">Social Media Posts</span>
          </div>
         
        </div>
       </div>
      </div>

      

      <GalleryBox imageDisplay = {imageDisplayOG}/>
    </div>
  );
}

export default WorkGallery;
