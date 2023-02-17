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
    <div className="flex justify-center text-white">

      <div className="flex items-center flex-col"><div className="flex h-[80vh] items-center justify-center w-full">
      <img className="flex h-[96%] w-full object-contain z-10 lg:r ounded-md lg:w-5/6 "
          src={`${blogFiles[id].imageID[imgindex]}`}
          alt="Ding design"
          />
      </div>
        <div className="flex h-[70vh] items-center justify-center w-full absolute top-0 " >
          <img src={`${blogFiles[id].imageID[imgindex]}`}  className="object-cover op-0 z-0 left-0 w-full h-full blur-2xl opacity-70" alt="Ding design" />
          
          </div>

        <div className="flex flex-row h-36 mt-2 space-x-2 lg:w-5/6">
          {blogFiles[id].imageID.map((pics,index) => (
            <div  className ={`flex lg:h-full w-48 lg:rounded-md mt-2 ${imgindex===index?"border-solid border-2 border-green-400 opacity-100 ":"opacity-20"}`} key={index} 
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

        <div
          className=" flex flex-col lg:w-5/6 h-screen
                    items-center"
        >
          <div
            className=" flex flex-wrap justify-start
                        text-justify
                        text-sm"
          >
            <div className="w-full lg:w-1/2 lg:pr-6 px-4 lg:p-0">
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

              {leftPara.map((paragraph) => (
                <p key={Math.random()} className="mt-6 text-justify">
                  {paragraph}
                </p>
              ))}

              {/* <!-- blog details in paragraph --> */}
            </div>

            {/* <!-- side detail with the tags of the blog --> */}
            <div className="w-full lg:w-1/2 lg:pl-6 lg:mt-16 lg:p-0 px-4">
              {rightPara.map((paragraph) => (
                <p key={Math.random()} className="mt-6 text-justify">
                  {paragraph}
                </p>
              ))}
              <div className="flex text-sm flex-wrap gap-3 my-6 ">
                {blogFiles[id].tags.map((tags) => (
                  <div key={Math.random()} className="tag2">
                    {tags}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
