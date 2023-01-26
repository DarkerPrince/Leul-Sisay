import blogFiles from "./files";
import { useNavigate } from "react-router-dom";
import { MdCommentBank } from "react-icons/md";

function Blog() {
  const navigate = useNavigate();

  function navigatingMethod() {
    navigate("/blogs");
  }

  return (
    <div
      onClick={navigatingMethod}
      className=" px-8 lg:px-24 flex flex-col justify-between"
    >
      {blogFiles.map((file) => (
        <div key={file.id} className=" grid grid-cols-1 lg:grid-cols-1 gap-3">
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
                <div className="flex items-start justify-between mt-8 mb-4 pb-3 border-b border-leulePrime">
                  <div className="flex flex-col items-start">
                    <a href="blogs">
                      <h2
                        className="flex flex-col text-xl font-semibold
                  text-leulePrime"
                      >
                        {file.title}
                      </h2>
                    </a>
                    <span className="text-sm">{file.postedDate}</span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm mx-1">{file.comments.length}</span>
                    <MdCommentBank className="text-leulePrime" />
                  </div>
                </div>
                <p className="text-sm">{file.content}</p>
              </div>
              <div className=" flex text-sm flex-wrap gap-3 mt-4">
                <div className="tag2">{file.tags[0]}</div>
                <div className="tag2">{file.tags[1]}</div>
                <div className="tag2">{file.tags[2]}</div>
                <div className="tag2">{file.tags[3]}</div>
                <div className="tag2">{file.tags[0]}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

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
