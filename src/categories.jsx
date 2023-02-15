import React from 'react';
import { CategoriesType } from './files';
import UILottieAnimation, {CodeLottieAnimation, GraphicLottieAnimation} from "./assets/lotties"

function Categories() {
  return (
  <div className='flex flex-col items-center justify-center h-auto lg:h-auto bg-slate-900 py-12 px-4'>
      <h2
          className="flex flex-col text-xl lg:text-4xl font-semibold mb-2
            text-leulePrime"
        > Professions
        </h2>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 self-center  w-full mt-4 lg:mt-8'>

   
<div className="mx-auto h-full w-full self-center max-w-sm bg-white border border-gray-200 px-4 pt-4 rounded-lg dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center pb-10">
        <UILottieAnimation className="h-48 w-48" play />;
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{CategoriesType[0].categoryName}</h5>
        <span className="text-sm text-gray-500 text-center w-3/4 dark:text-gray-400">{CategoriesType[0].categoriesDetail}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
        
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View more</a>
        </div>
    </div>
   
</div>

<div className="mx-auto h-full w-full self-center max-w-sm bg-white border border-gray-200 px-4 pt-4 rounded-lg dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col items-center pb-10">
        <CodeLottieAnimation className="h-48 w-48" play />;
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{CategoriesType[1].categoryName}</h5>
        <span className="text-sm text-gray-500 text-center w-3/4 dark:text-gray-400">{CategoriesType[1].categoriesDetail}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
           
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View more</a>
        </div>
    </div>
   
</div>
<div className="mx-auto h-full w-full self-center max-w-sm bg-white border border-gray-200 px-4 pt-4 rounded-lg dark:bg-gray-800 dark:border-gray-700">
<div className="flex flex-col items-center pb-10">
        <GraphicLottieAnimation className="h-48 w-48" play />;
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{CategoriesType[2].categoryName}</h5>
        <span className="text-sm text-gray-500 text-center w-3/4 dark:text-gray-400">{CategoriesType[2].categoriesDetail}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
           
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View more</a>
        </div>
    </div>

   
</div>

  
    </div>
  </div>
   


  )
}

export default Categories;