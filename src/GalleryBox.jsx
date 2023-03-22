import React from 'react'
import GalleryItem from "./galleryItem";
import style from './cardsHover.module.css';


function GalleryBox({imageDisplay}) {
    console.log({imageDisplay})
  return (
    <div className={`grid ${style.gridFixedHeight} grid-cols-2 lg:grid-cols-6 w-full gap-3 `}>
        <div   className=" relative overflow-hidden lg:row-span-2 rounded-md group">
         
          <GalleryItem val={imageDisplay[0]}/> 
         
        </div>
        <div  className="relative overflow-hidden  rounded-md group">
        <GalleryItem val={imageDisplay[1]}/> 
        </div>
        <div   className=" relative overflow-hidden lg:row-span-2  rounded-md group">
        <GalleryItem val={imageDisplay[2]}/> 
        </div>
        <div   className=" relative  rounded-md lg:row-span-3 lg:col-span-3 group">
        <div 
            // onClick={()=> navigateMethod(imageDisplay[17].id) } 
            className='h-full w-full overflow-hidden rounded-md group'>
              <div  className ={`flex rounded-md text-sm   h-full w-full overflow-hidden  lg:rounded-md relative transition-all ease-in-out duration-500  hover:scale-110 hover:z-10`} key={imageDisplay[17].id} >
              <div         
             className="flex justify-end pb-0 group-hover:pb-0 invisible p-4 group-hover:visible transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute  text-white h-full w-full z-10 bg-gradient-to-b to-slate-800 from-slate-800/10">
              <p className=" absolute -bottom-2 group-hover:bottom-8 w-[80%] left-8 group-hover:visible invisible opacity-0 group-hover:opacity-100  scale-100 transition-all duration-500 ease-in-out  text-xs">
              {`#${imageDisplay[17].id} `} {`${imageDisplay[17].title} `}
              </p>
              </div>
              
              {/* <Image
          
                 src={blogFiles[props.val].imageID[0]}
                 fadeIn = {true}
            
                 fallback={<Shimmer className="object-cover h-full w-full rounded-md" />}
      /> */}

              <img
              className="object-contain h-full w-full rounded-md"
              src={imageDisplay[17].imageID[0]}
              
              loading="lazy"
              alt={""}
              />
              </div>
            </div>
        </div>
        <div   className=" relative overflow-hidden lg:row-span-2  rounded-md group">
        <GalleryItem val={imageDisplay[4]}/> 
        </div>
        <div   className=" relative overflow-hidden   rounded-md  group">
        <GalleryItem val={imageDisplay[5]}/> 
        </div>
      
        <div  className=" relative overflow-hidden col-span-2 lg:col-span-1 rounded-md group">
        <GalleryItem val={imageDisplay[6]}/> 
        </div>
       
        
      </div>
  )
}

export default GalleryBox