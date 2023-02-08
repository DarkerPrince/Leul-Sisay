import leftdecor from "./assets/decoration/leftDecor.png";
import calartCertificate from "./assets/Certificates/calarts.png";

function CertificationPage() {
  return (
    <div
      id="my_certificate"
      className="flex flex-col bg-slate-800 text-center bg-contain bg-no-repeat px-4"
      style={{ backgroundImage: `url(${leftdecor})` }}
    >
      <h1 className="flex flex-col text-4xl font-semibold text-leulePrime">
        Certification
      </h1>
      <div className="flex items-center text-justify lg:flex-row flex-col w-full md:w-[50vw] bg-white/5 text-white shadow-lg rounded-lg lg:w-[70vw] md:mx-auto justify-start mt-8 px-0">
        <img
          className="lg:w-1/3 rounded-t-xl md:rounded-l-xl md:rounded-r-none bg-contain
            bg-no-repeat justify-center items-center"
          src={calartCertificate}
          alt="Here
                some details if not valued the right"
        />
        <div className="flex flex-col lg:w-2/3 w-full px-6 mx-12">
          <p className="text-lg font-semibold tracking-wider">
            Certificate title
          </p>
          <p className="mb-6 text-sm">
            It is the formal attestation or confirmation of certain
            characteristics of an object, person, or organization. This
            confirmation is often, but not always, provided by some form of
            external review, education, assessment, or audit. Accreditation is a
            specific organization's process of certification.
          </p>
        </div>
      </div>
      <div className="flex items-center text-justify lg:flex-row flex-col w-full md:w-[50vw] bg-white/5 text-white shadow-lg rounded-lg lg:w-[70vw] md:mx-auto justify-start mt-8 px-0">
        <img
          className="lg:w-1/3 w-[90%] rounded-xl bg-contain
            bg-no-repeat justify-center items-center"
          src={calartCertificate}
          alt="Here
                some details if not valued the right"
        />
        <div className="flex flex-col lg:w-2/3 w-full px-6 mx-12">
          <p className="text-lg font-semibold tracking-wider">
            Certificate title
          </p>
          <p className="mb-6 text-sm">
            It is the formal attestation or confirmation of certain
            characteristics of an object, person, or organization. This
            confirmation is often, but not always, provided by some form of
            external review, education, assessment, or audit. Accreditation is a
            specific organization's process of certification.
          </p>
        </div>
      </div>

    
    </div>
  );
}

export default CertificationPage;
