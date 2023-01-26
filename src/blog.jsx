
import blogFiles from "./files";
import {MdCommentBank} from "react-icons/md"

function Blog() {

  return (
    <div className=" px-24 flex flex-col justify-between">
      {
        blogFiles.map((file)=>
        <div className=" grid grid-cols-1 lg:grid-cols-1 gap-3">
        <div
          className="flex flex-col flex-wrap lg:flex-row lg:w-3/4
            mb-4
            rounded-xl
            bg-white/5

            text-white
            p-4"
        >
          <img
            src={require(`./assets/${file.pictures[0]}`)}
            alt=""
            className="rounded-lg object-cover h-64 w-full lg:w-1/2
                bg-slate-50"
          />
          <div
            className="flex flex-col lg:w-1/2 justify-between gap-1
                pl-5
                text-start"
          >
            <div>
              <div className="flex justify-between my-3">
                <h2 className="font-medium text-lg">
                  <a href="/blogs">{file.title}</a>
                </h2>
                <div className="flex items-center">
                  <span>{file.comments.length} </span>
                  <MdCommentBank/>
                  <span className="mx-4 text-sm text-slate-500">
                    {file.postedDate}
                  </span>
                </div>
              </div>
              <p className="text-sm">
              {file.content}
              </p>
            </div>
            <div className=" flex text-sm flex-wrap gap-3">
            
              <div className="tag2">{file.tags[0]}</div>
              <div className="tag2">{file.tags[1]}</div>  
              <div className="tag2">{file.tags[2]}</div>  
              <div className="tag2">{file.tags[3]}</div> 
               <div className="tag2">{file.tags[0]}</div>
            </div>
          </div>
        </div>
      </div>)
      }
    

      {/* 
    <!-- <div className="blogFilteringCard">
    <Input type="search" placeholder="🔎 Search projects" style="height: 40px; border-radius: 4px; width: 70%; padding: .5rem;"></Input>
    <div style="display: flex; flex-wrap:
        wrap; gap: 10px; margin-top: 24px;
        justify-content: center;
        ">

        <div className="tag shadow">
            Developed
        </div>
        <div className="tag shadow">
            UI Design
        </div>
        <div className="tag shadow">
            Case Studies
        </div>

        <div className="tag shadow">
            Business Cards
        </div>
        <div className="tag shadow">
            Booklets
        </div>
        <div className="tag shadow">
            Banners
        </div>
        <div className="tag shadow">
            Social Media Posts
        </div>
        <div className="tag shadow">
            Logo Designs
        </div>
        <div className="tag shadow">
            Others
        </div>
    </div>

</div> --> */}
    </div>
  );
}
export default Blog;
