import React from 'react'

import { useNavigate } from 'react-router-dom'


export default function GalleryItem({val}) {
    
    const navigate = useNavigate();
    function navigateMethod(idindex){
        console.log("navigating on the gallery function")
        navigate(`/blog/blogs/${idindex}` , { state : {...val}} );
      }
      console.log(val.id===4, val.title);
  return (
   
    <div 
            onClick={()=> navigateMethod(val.id+1) } 
            className='h-full w-full overflow-hidden rounded-md group'>
              <div  className ={`flex rounded-md text-sm   h-full w-full overflow-hidden  lg:rounded-md relative transition-all ease-in-out duration-500  hover:scale-110 hover:z-10`} key={val.id} >
              <div         
             className="flex justify-end pb-0 group-hover:pb-0 invisible p-4 group-hover:visible transition-all duration-300 ease-in-out group-hover:z-50 group-hover:delay-100 group-hover:overflow-hidden absolute  text-white h-full w-full z-10 bg-gradient-to-b to-slate-800 from-slate-800/10">
              <p className=" absolute -bottom-2 group-hover:bottom-8 w-[80%] left-8 group-hover:visible invisible opacity-0 group-hover:opacity-100  scale-100 transition-all duration-500 ease-in-out  text-xs">
              {`#${val.id} `} {`${val.title} `}
              </p>
              </div>
              
           
              <img
              className={`${val.id===4?"object-contain":"object-cover"} h-full w-full rounded-md`}
              src={val.imageID[0]}
              
              loading="lazy"
              alt={""}
              />
              </div>
            </div>
  )
}
