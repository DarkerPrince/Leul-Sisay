import React, { useEffect, useRef } from "react";
import styles from './enteranceAnime.module.css'
import { CategoriesType } from "../../assets/files";
import UILottieAnimation, {
  GraphicLottieAnimation,
  CodeLottieAnimation
} from "../../assets/lotties";
import { useState } from "react";

function Categories() {

   const myRef = useRef();
   const [enteranceScene , setEnteranceScene] = useState();


   console.log("Entry Instersecting" , enteranceScene);
    useEffect(() => {
      
      const observer = new IntersectionObserver((enteries)=>{
       const entry = enteries[0];
       setEnteranceScene(entry.isIntersecting);
       });
      
      observer.observe(myRef.current);

    }, []);


  return (
    <div  className={`snap-start flex flex-col items-center justify-center h-auto md:h-[100vh] bg-slate-900 py-12 px-4`}>
      <h2
        className="flex flex-col text-xl lg:text-4xl font-semibold mb-2
            text-leulePrime"
      >
        {" "}
        Professions
      </h2>
      <div ref={myRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-6 self-center  w-full md:px-12 mt-4 lg:mt-8`}>
        <div className={`${enteranceScene? styles.show : styles.hidden} ${styles.categorycard} mx-auto h-full w-full self-center max-w-sm px-4 pt-4 rounded-lg bg-gray-800 border-gray-700`}>
          <div className="flex flex-col items-center pb-10">
            <UILottieAnimation className="h-48 w-48" play />;
            <h5 className="mb-1 text-xl font-medium text-white">
              {CategoriesType[0].categoryName}
            </h5>
            <span className="text-sm  text-center w-full text-gray-400">
              {CategoriesType[0].categoriesDetail}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
            
            </div>
          </div>
        </div>

        <div className={` ${enteranceScene? styles.show : styles.hidden} ${styles.categorycard} mx-auto h-full w-full self-center max-w-sm px-4 pt-4 rounded-lg bg-gray-800 border-gray-700`}>
          <div className="flex flex-col items-center pb-10">
            <CodeLottieAnimation className="h-48 w-48" play />;
            <h5 className="mb-1 text-xl font-medium  text-white text-center">
              {CategoriesType[1].categoryName}
            </h5>
            <span className="text-sm text-center w-full text-gray-400">
              {CategoriesType[1].categoriesDetail}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
             
            </div>
          </div>
        </div>

        <div className={`${enteranceScene? styles.show : styles.hidden} ${styles.categorycard} mx-auto h-full w-full self-center max-w-sm  px-4 pt-4 rounded-lg bg-gray-800 `}>
          <div className="flex flex-col items-center pb-10">
            <GraphicLottieAnimation className="h-48 w-48" play />;
            <h5 className="mb-1 text-xl font-medium  text-white">
              {CategoriesType[2].categoryName}
            </h5>
            <span className="text-sm  text-center w-full  text-gray-400">
              {CategoriesType[2].categoriesDetail}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
             
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Categories;
