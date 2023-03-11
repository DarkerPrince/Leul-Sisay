import React from "react";


function CertificateNew({cert}) {
  return (
    <>
      <div className="relative w-full flex items-center justify-center flex-wrap md:p-8 ">
        <div className= " m-auto p-auto group hover:h-[420px] relative max-w-[420px] h-[250px] bg-slate-800/70 md:mx-8 my-3 px-4 py-4 flex flex-col shadow-md shadow-black/50 transition-all duration-300 rounded-md ease-in-out">
          <div className="relative md:w-[380px] md:h-[380px] -top-[40%] left-2 shadow-sm shadow-black/20 z-10 ">
            <img
              alt="certificates "
              src={require(`${cert.imageID}`)}
            />
          </div>
          <div className=  " group-hover:mt-8 group-hover:visible group-hover:opacity-100 relative -top-[140px] p-1 text-slate-300 text-center invisible opacity-0 transition-all ease-in-out duration-300"
>
            <h2>{cert.title}</h2>
            <p >
           {cert.contents}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateNew;
