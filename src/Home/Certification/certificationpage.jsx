import leftdecor from "../../assets/decoration/leftDecor.png";

import { Certificates } from "../../assets/files";

import CertificateNew from "./CertificateNew";


function CertificationPage() {
  return (
    <div
      id="my_certificate"
      className="snap-start flex items-center justify-center space-y-32 flex-col my-4 lg:my-12 lg:h-screen  text-center bg-contain bg-no-repeat px-4"
      style={{ backgroundImage: `url(${leftdecor})` }}
    >
      <h1 className="flex text-4xl font-semibold text-leulePrime">
        Certification
      </h1>
     
      

      <div className="flex flex-col gap-40 items-start md:flex-row w-full">
      {
        Certificates.map((cert)=>
          <CertificateNew cert={cert}/>)
      }
      </div>
    
    </div>
  );
}

export default CertificationPage;
