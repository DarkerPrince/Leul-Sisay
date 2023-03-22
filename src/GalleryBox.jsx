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
        <GalleryItem val={imageDisplay[3]}/> 
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