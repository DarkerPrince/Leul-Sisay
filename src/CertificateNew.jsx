import React from "react";


function CertificateNew({cert}) {
  return (
    <>
      <div className="relative w-full flex items-center justify-center flex-wrap p-8">
        <div className= "group hover:h-[420px] hover:w-[420px] relative max-w-[420px] h-[300px] bg-slate-700 mx-8 my-3 px-5 py-4 flex flex-col shadow-md shadow-black/50 transition-all duration-300 rounded-md ease-in-out">
          <div className="relative md:w-[380px] md:h-[380px] -top-[40%] left-2 shadow-sm shadow-black/20 z-10 ">
            <img
            alt="certificates "
              src={cert}
            />
          </div>
          <div className=  " group-hover:mt-8 group-hover:visible group-hover:opacity-100 relative -top-[140px] p-1 text-white font-medium text-center invisible opacity-0 transition-all ease-in-out duration-300"
>
            <h2> Cal Art certificate</h2>
            <p >
            It is the formal attestation or confirmation of certain
            characteristics of an object, person, or organization. This
            confirmation is often, but not always, provided by some form of
            external review, education, assessment, or audit. Accreditation is a
            specific organization's process of certification.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateNew;
