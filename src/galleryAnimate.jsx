import styles from './gallerycss.module.css'
import blogFiles from './files'

import GalleryItem from './galleryItem';


function GalleryAnimate() {


  let parti = Math.ceil(blogFiles.length / 3);
  let galleryList1 = [];
  let galleryList2 = [];
  let galleryList3 = [];
 

  

  for(let i=0; i<blogFiles.length; i++){
      console.log(i<parti)
       if(i<parti) {
         galleryList1.push(i);
         console.log(" 1st is Here i add ",blogFiles[i].id );
        }
       else if( i >= parti && i<(parti*2)){
         galleryList2.push(i);
         console.log(" 2nd is Here i add ",blogFiles[i].id );
        }
       else if( i>(parti*2)){
         galleryList3.push(i);
         console.log(" 3rd is Here i add ",blogFiles[i].id );   
        }  
  }

  

  return (
    <div className='flex flex-col gap-2 w-full overflow-x-clip h-screen bg-gradient-to-t from-slate-800 to-slate-900'>
      <div className="mx-4 md:mx-24 flex flex-col items-center justify-center">
        <h2
          className="flex flex-col text-xl lg:text-4xl font-semibold mb-2
            text-leulePrime"
        > Galleries
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
    <div className='flex bg-slate-700 shadow-[inset_4px_-2px_8px_#64748b] rounded-lg  overflow-clip flex-col gap-2  items-center mx-4 md:mx-24 py-4'>
    <div className={`flex  h-32 w-fit gap-2 ${styles[`moving-text`]} `}>
    {galleryList1.map((index) => (
            <GalleryItem val={index} />   
          ))}   
    </div>
    <div className={`flex  h-32 w-fit gap-2 ${styles[`moving-text`]} `}>
    {galleryList2.map((index) => (
           <GalleryItem val={index}/> 
            
          ))}   
    </div>
    <div className={`flex  h-32 w-fit gap-2 ${styles[`moving-text`]} `}>
    {galleryList3.map((index) => (
           <GalleryItem val={index}/> 

          ))}   
    </div>
    </div>
    </div>
  )
}

export default GalleryAnimate