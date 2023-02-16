import blogFiles from "./files";
import { Link } from "react-router-dom";
import { MdCommentBank } from "react-icons/md";

function Blog() {
  

  return (
    <div className=" px-8 lg:px-24 flex flex-col justify-between">
      {blogFiles.map((file) => (
        <div key={file.id} className=" grid  grid-cols-1 py-4 lg:grid-cols-1 gap-3 border-b-2 border-white/5 ">
          <div
            className={`flex flex-col   overflow-visible justify-end  lg:flex-row w-full
            mb-4 rounded-xl items-start text-white   p-4`}
    
          >
            <img 
              src={`${file.imageID[0]}`}
              alt={file.title + " here"}
              className={`rounded-lg hover:scale-125  opacity-100 transition-all left-4 duration-[0.8s] ease-in-out text-black object-cover h-64  w-full lg:w-1/2
            `}/>    
            
            <div
              className="flex flex-col lg:w-1/2 justify-between gap-1
                pl-5
                text-start"
            >
              <div>
                <div className="flex items-start justify-between mb-4 pb-3 border-b border-white/25">
                  <div className="flex flex-col items-start">
                    <Link to={"blogs/" + file.id}>
                      <h2
                        className="flex flex-col text-xl font-semibold
                  text-leulePrime"
                      >
                        {`#${file.id} ${file.title}`}
                      </h2>
                    </Link>
                    <span className="text-sm text-gray-400">{file.postedDate}</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm mx-1">{file.comments.length}</span>
                    <MdCommentBank className="text-leulePrime" />
                  </div>
                </div>
                <p className="text-sm">{file.content}</p>
              </div>
              <div className=" flex text-sm flex-wrap gap-3 mt-4">
                {file.tags.map((tag) => (
                  <div key={tag} className="tag2">{tag}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Blog;
