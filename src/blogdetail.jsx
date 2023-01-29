import blogFiles from "./files";
import { MdCommentBank } from "react-icons/md";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const params = useParams();
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
      <div className="flex items-center flex-col">
        <img
          className="flex lg:h-1/2 w-full object-cover lg:rounded-md
                    lg:w-5/6"
          src={require(`./assets/${blogFiles[id].pictures[1]}`)}
          alt="Ding design"
        />

        <div className="flex flex-row h-36 mt-2 space-x-2 lg:w-5/6">
          {blogFiles[id].pictures.map((pics) => (
            <img
              className="flex lg:h-full w-48 object-cover lg:rounded-md mt-2"
              key={Math.random()}
              src={require(`./assets/${pics}`)}
              alt={""}
            />
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
