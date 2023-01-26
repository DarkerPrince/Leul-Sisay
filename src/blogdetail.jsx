
import blogFiles from "./files";
import {MdCommentBank} from "react-icons/md"

function BlogDetail() {
  return (
    <>
      {/* <!-- http://drive.google.com/uc?export=view&id=1oR8IS8-zduKYzl4YdMachbtCpoP6zz-9 --> */}
      <div className="flex justify-center text-white">
        <div className="flex items-center flex-col">
        <img
            className="flex lg:h-1/2 w-full object-cover lg:rounded-md
                    lg:w-5/6"
            src={require(`./assets/${blogFiles[0].pictures[0]}`)}
            alt="Ding design"
          />
        
         <div className="flex flex-row h-36 mt-2 space-x-2 lg:w-5/6">
         <img
            className="flex lg:h-full w-48 object-cover lg:rounded-md mt-2"
            src={require(`./assets/${blogFiles[0].pictures[1]}`)}
            alt="Ding design"
          />
           <img
            className="flex lg:h-full w-48 object-cover lg:rounded-md mt-2"
            src={require(`./assets/${blogFiles[0].pictures[2]}`)}
            alt="Ding design"
          />  
          <img
          className="flex lg:h-full w-48 object-cover lg:rounded-md mt-2"
          src={require(`./assets/${blogFiles[0].pictures[2]}`)}
          alt="Ding design"
        />
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
              <div className="w-full lg:w-1/2 lg:pr-6">
                {/* <!-- content title of the blog --> */}
                <div
                  className="flex items-center h-8
                                justify-between
                                mt-8
                                mb-4"
                >
                  <h2
                    className="flex flex-col text-xl font-semibold
                                    text-orange-500"
                  >
                    {blogFiles[0].title}
                  </h2>

                  <div className="flex items-center">
                    <span className="text-sm mx-1">
                      {blogFiles[0].comments.length} 
                    </span>
                    <MdCommentBank className="text-leulePrime"/>
                    <span className="text-sm mx-6">
                      {blogFiles[0].postedDate}
                    </span>
                  </div>
                </div>

                {/* <!-- blog details in paragraph --> */}
                <p className="mt-6">{blogFiles[0].moreContent[0]}</p>
                <p className="mt-6">{blogFiles[0].moreContent[0]}</p>
                <p className="mt-6">{blogFiles[0].moreContent[0]}</p>
              </div>

              {/* <!-- side detail with the tags of the blog --> */}
              <div className="w-full lg:w-1/2 lg:pl-6 lg:mt-16">
                <p className="mt-6">{blogFiles[0].moreContent[0]}</p>

                <p className="mt-6">{blogFiles[0].moreContent[0]}</p>

                <div className="flex text-sm flex-wrap gap-3 my-6 ">
                  <div className="tag2">{blogFiles[0].tags[0]}</div>
                  <div className="tag2">{blogFiles[0].tags[1]}</div>
                  <div className="tag2">{blogFiles[0].tags[2]}</div>

                  <div className="tag2">{blogFiles[0].tags[0]}</div>
                  <div className="tag2">{blogFiles[0].tags[0]}</div>
                  <div className="tag2">{blogFiles[0].tags[0]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- <div className="flex flex-col rounded-xl w-max h-min sticky top-10 
        bg-slate-50">
        <h2 className="m-6 text-slate-500 text-xl font-semibold">Comments</h2>
        <div
          className="rounded-xl flex bg-slate-100 p-4 mt-1 mx-8
                    "
        >
          <div className="bg-slate-500 h-[50px] w-[50px] rounded-md "></div>
          <div className="ml-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">Anonymus user 1</h3>
              <span className="text-xs">June 12 ,2022</span>
            </div>

            <p className="w-11/12">
              I really would like to appreciate what you did there and keep it
              up..
            </p>
          </div>
        </div>
        <div
          className="rounded-xl flex bg-slate-100 p-4 mt-1 mx-8
                    "
        >
          <div className="bg-slate-500 h-[50px] w-[50px] rounded-md "></div>
          <div className="ml-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">Anonymus user 2</h3>
              <span className="text-xs">June 12 ,2022</span>
            </div>

            <p className="w-11/12">
              I really would like to appreciate what you did there and keep it
              up..
            </p>
          </div>
        </div>
        <div
          className="rounded-xl flex bg-slate-100 p-4 mt-1 mx-8
                    "
        >
          <div className="bg-slate-500 h-[50px] w-[50px] rounded-md "></div>
          <div className="ml-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">Anonymus user 3</h3>
              <span className="text-xs">June 12 ,2022</span>
            </div>

            <p className="w-11/12">
              I really would like to appreciate what you did there and keep it
              up..
            </p>
          </div>
        </div>
        <div
          className="shadow-2xl
                    flex
                    bg-white justify-between
                    m-8
                    p-3 items-center rounded

                    "
        >
          <Input
            type="search"
            placeholder="Type something here..."
            className="
                        outline-none h-10 rounded w-11/12 p-2 border-none
                        "
          ></Input>
          <div
            className="h-10 w-10 rounded shadow-lg items-center
                    justify-center flex
                    bg-slate-200"
          >
            📤
          </div>
        </div>{" "}
        --> */}
      </div>

      <div className="h-32"></div>
    </>
  );
}

export default BlogDetail;
