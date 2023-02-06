import blogFiles from "./files";
import { useNavigate, Link } from "react-router-dom";
import { MdCommentBank } from "react-icons/md";

function Blog() {
  const navigate = useNavigate();

  // function navigatingMethod(path) {
  //   "blogs/" + path;
  // }

  return (
    <div className=" px-8 lg:px-24 flex flex-col justify-between">
      {blogFiles.map((file) => (
        <div key={file.id} className=" grid grid-cols-1 lg:grid-cols-1 gap-3">
          <div
            className="flex flex-col flex-wrap lg:flex-row lg:w-3/4
            mb-4
            rounded-xl
            items-start
            bg-white/5
            text-white
            p-4"
          >
            <img
              src={`${file.imageID[0]}`}
              alt={file.title + " image here"}
              className="rounded-lg text-black object-cover h-64 w-full lg:w-1/2
                bg-slate-50"
            />         
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
