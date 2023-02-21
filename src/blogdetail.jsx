import blogFiles from "./files";
import { MdCommentBank } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState } from "react";

function BlogDetail() {
  const params = useParams();
  const [imgindex, setImgIndex] = useState(0);
  const id = params.id - 1;
  const leftPara = [];
  const rightPara = [];
  const totalparagraphSize = blogFiles[id].moreContent.length;
  console.log("Blog details info is", blogFiles[id]);
  let paragSecSize = Math.ceil(totalparagraphSize / 2);
  console.log("the paragraph contains splitted", paragSecSize);
  for (let i = 0; i < totalparagraphSize; i++) {
    if (i < paragSecSize) {
      leftPara.push(`${blogFiles[id].moreContent[i]}`);
    } else {
      rightPara.push(`${blogFiles[id].moreContent[i]}`);
    }
  }


  return (
    <div className="flex relative justify-center text-white">

      <div className="h-screen">
        <div className=" fixed top-0  left-0 px-3 flex flex-col items-center justify-end lg:w-1/2 lg:h-full ">
          <div className="flex h-[70vh] items-end justify-center w-full ">
        <img className="flex h-[96%] w-full object-contain z-10 lg:r ounded-md lg:w-full "
          src={`${blogFiles[id].imageID[imgindex]}`}
          alt="Ding design"
          />
           </div>
          <div className="flex h-[70vh] items-center justify-center w-full absolute top-0 " >
          <img src={`${blogFiles[id].imageID[imgindex]}`}  className="object-cover op-0 z-0 left-0 w-full h-full blur-2xl opacity-70" alt="Ding design" />
          
           </div>

        <div className="flex flex-row h-36  mt-1  space-x-2 lg:w-full">
          {blogFiles[id].imageID.map((pics,index) => (
            <div  className ={`flex lg:h-5/6 w-48 lg:rounded-md mt-2 ${imgindex===index?"border-solid border-2 opacity-100 ":"opacity-20"}`} key={index} 
            onClick={()=>{
              setImgIndex(index)
              console.log("Change the image index" , index)
            }}>
            <img
              className="object-cover"
              src={pics}
              alt={""}
              />
              </div>
          ))}
        </div>
        </div>
       

       
          <div
            className=" absolute items-end flex-col lg:w-1/2 px-6 h-full  flex flex-wrap justify-start
                        text-justify overflow-auto pb-4 
                        text-sm"
          >
            <div className="w-full lg:pr-6 px-4 lg:p-0">
              {/* <!-- content title of the blog --> */}
              <div className="flex items-start justify-between mt-8 mb-4 pb-3 border-b border-leulePrime">
                <div className="flex flex-col items-start">
                  <h2
                    className="flex flex-col text-xl font-semibold
                  text-leulePrime"
                  >
                    {blogFiles[id].title}
                  </h2>
                  <span className="text-sm">{blogFiles[id].postedDate}</span>
                </div>

                <div className="flex items-center">
                  <span className="text-sm mx-1">
                    {blogFiles[id].comments.length}
                  </span>
                  <MdCommentBank className="text-leulePrime" />
                </div>
              </div>

              {blogFiles[id].moreContent.map((paragraph) => (
                <p key={Math.random()} className="mt-6 text-justify">
                  {paragraph}
                </p>
              ))}
               <div className=" flex text-sm flex-wrap gap-3 mt-4">
                {blogFiles[id].tags.map((tag) => (
                  <div key={tag} className="tag2">{tag}</div>
                ))}
              </div>

           
            </div>

           
          </div>
       
      </div>
    </div>
  );
}

export default BlogDetail;
