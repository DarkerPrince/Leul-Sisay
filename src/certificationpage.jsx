import leftdecor from "./assets/decoration/leftDecor.png";
import calartCertificate from "./assets/Certificates/calarts.png";
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
      <CertificateNew cert={calartCertificate}/>
      <CertificateNew cert={calartCertificate}/>
      </div>

     


      {/* <div className="flex items-center lg:flex-row flex-col w-full md:w-[50vw]  text-white shadow-lg rounded-lg lg:w-[70vw] md:mx-auto justify-start mt-8 px-0">
        <img
          className="lg:w-1/3  bg-contain
            bg-no-repeat justify-center items-center"
          src={calartCertificate}
          alt="Here
                some details if not valued the right"
        />
        <div className="flex flex-col lg:w-2/3 w-full px-6 mx-12">
          <p className="text-lg font-semibold tracking-wider">
           
          </p>
          <p className="mb-6 text-xs">
          
          </p>
        </div>
      </div>

      <div className="flex items-center lg:flex-row flex-col-reverse w-full md:w-[50vw] text-white shadow-lg rounded-lg lg:w-[70vw] md:mx-auto justify-start mt-8 px-0">
        <div className="flex flex-col lg:w-2/3 w-full px-6 mx-12">
          <p className="text-lg font-semibold tracking-wider">
            Kibur certificate
          </p>
          <p className="mb-6 text-xs">
            It is the formal attestation or confirmation of certain
            characteristics of an object, person, or organization. This
            confirmation is often, but not always, provided by some form of
            external review, education, assessment, or audit. Accreditation is a
            specific organization's process of certification.
          </p>
        </div>
       
        <img
          className="lg:w-1/3  bg-contain
            bg-no-repeat justify-center items-center"
          src={calartCertificate}
          alt="Here
                some details if not valued the right"
        />
       
      </div> */}
    
    </div>
  );
}

export default CertificationPage;
