
import { MdCommentBank } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { GiDirectionSign } from "react-icons/gi"

function BlogDetail() {


  const location = useLocation();
  console.log(location.state, "🏀");

  const [imgindex, setImgIndex] = useState(0);
  // const id = params.id - 1;
  const leftPara = [];
  const rightPara = [];
  const totalparagraphSize = location.state.moreContent.length;
  console.log("Blog details info is", location.state);
  let paragSecSize = Math.ceil(totalparagraphSize / 2);
  console.log("the paragraph contains splitted", paragSecSize);
  for (let i = 0; i < totalparagraphSize; i++) {
    if (i < paragSecSize) {
      leftPara.push(`${location.state.moreContent[i]}`);
    } else {
      rightPara.push(`${location.state.moreContent[i]}`);
    }
  }

  return (
    <div className="flex relative justify-between flex-col md:flex-row text-white h-full">
      <div className=" px-3 flex flex-col items-center lg:w-1/2 lg:h-full ">
        <div className="flex h-[70vh] items-end justify-center w-full ">
          <img
            className="flex h-[96%] w-full object-contain z-10 lg:r rounded-md lg:w-full "
            src={`${location.state.imageID[imgindex]}`}
            alt="Ding design"
          />
        </div>
        <div className="flex h-[70vh] items-center justify-center md:w-1/2 absolute top-0 ">
          <img
            src={`${location.state.imageID[imgindex]}`}
            className="object-cover z-0 left-0 w-full h-full blur-2xl opacity-50"
            alt="Ding design"
          />
        </div>
        <div className='w-full overflow-auto scrollbar-hide'>
          <div className="flex flex-row h-36  mt-1  space-x-2 lg:w-full">
            {location.state.imageID.map((pics, index) => (
              <div
                className={`flex lg:h-5/6 md:w-48 w-40 bg-slate-600 rounded-md mt-2 ${imgindex === index
                    ? "border-solid border-2 opacity-100 "
                    : "opacity-20"
                  }`}
                key={index}
                onClick={() => {
                  setImgIndex(index);
                  console.log("Change the image index", index);
                }}
              >
                <img className="object-cover w-full" src={pics} alt={""} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" h-screen overflow-auto lg:w-1/2 ">
        <div
          className="flex-col  px-6  flex flex-wrap justify-end
                        text-justify pb-4 
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
                  {location.state.title}
                </h2>
                <span className="text-sm">{location.state.postedDate}</span>
                {location.state.casestudylink !== "" ?
                <a href={location.state.casestudylink} target="_blank" rel="noreferrer">
                 <div className="flex items-center justify-center gap-3 mt-2 px-8 py-2 bg-leulePrime rounded-md"> <GiDirectionSign /> Go to Case study</div> </a>
                 : <></>

                }
              </div>

              <div className="flex items-center">
                <span className="text-sm mx-1">
                  {location.state.comments.length}
                </span>
                <MdCommentBank className="text-leulePrime" />
              </div>
            </div>

            {location.state.moreContent.map((paragraph) => (
              <p key={Math.random()} className="mt-6 text-justify">
                {paragraph}
              </p>
            ))}
            <div className=" flex text-sm flex-wrap gap-3 mt-4">
              {location.state.tags.map((tag) => (
                <div key={tag} className="tag2">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
