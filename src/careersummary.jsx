import bottomdecor from "./assets/decoration/sidebottomDecor.png";
import AIT from "./assets/company/AIT.png";
import AHRI from "./assets/company/AHRI.jfif";
import Kibur from "./assets/company/kibur.jpg";
import SSC from "./assets/company/SSC.png";
import TYK from "./assets/company/TYK.png";
import Kemer from "./assets/company/kemer.png";

function CarrerSummary() {
  return (
    <div
      id="my_career"
      className="flex flex-col bg-contain bg-no-repeat bg-slate-800 bg-right items-center
        justify-center text-white"
      style={{ backgroundImage: `url(${bottomdecor})` }}
    >
      <h1 className="flex flex-col text-4xl font-semibold text-leulePrime">
        Career Summary
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-4/5 mt-12">
        <div
          className="flex border-b border-b-gray-500/30 mb-3 text-left
                pb-4"
        >
          <img
            src={AIT}
            alt="AIT TECH"
            className="w-[50px] h-[50px] bg-white rounded-md object-scale-down
                    shadow-lg"
          />
          <div className="ml-3 text-justify">
            <h3 className="m-0 font-medium text-leulePrime">
              AIT IT Solutions and Cybersecurity
            </h3>
            <p className=" m-0 w-3/4">
              I've been working as a UI/UX designer and a graphics designer on a
              mobile platform that performs ecommerce.
            </p>

            <button
              className="inline-flex relative flex-col gap-2 group
                     "
            >
              <p className=" mb-3 text-leulePrime text-sm rounded-md bg-slate-600 px-2">
                More
              </p>

              <div
                className="hidden top-full
                        group-focus:block "
              >
                <ul className="flex flex-col list-disc text-justify space-y-4">
                  <li>
                    <p>
                      Developed For both android and IOS devices using Flutter
                      framework. Integrate With Google Maps API, and also
                      utilized Firebase
                    </p>
                  </li>
                  <li>
                    <p>
                      Designed multiple mobile app designs and web designs As a
                      graphics designer also I have done multiple social media
                      designs , banners , rollups ,flyers and business cards.
                    </p>
                  </li>
                </ul>
              </div>
            </button>

            <h4 className="mt-1 font-medium text-sm text-gray-400">
              UI/Ux Designer | Mobile First Developer | Graphic Designer
            </h4>
          </div>
        </div>

        <div
          className="flex border-b border-b-gray-500/30 mb-3 text-left
                pb-4"
        >
          <img
            src={AHRI}
            alt="AHRI"
            className="w-[50px] h-[50px] rounded-md object-cover
                    shadow-lg"
          />
          <div className="ml-3 text-justify">
            <h3 className="m-0 font-medium text-leulePrime">AHRI</h3>
            <p className="m-0 w-3/4">
              Was in charge of learning the institute database structure and
              handling the backend among several web-based platform
              capabilities.
            </p>
            <button
              className=" flex relative flex-col gap-2 group
                    "
            >
              <p className="text-leulePrime text-sm rounded-md bg-slate-600 px-2">
                More
              </p>

              <div
                className="hidden top-full
                       group-focus:block "
              >
                <ul className="flex flex-col list-disc text-justify space-y-4 w-3/4">
                  <li>
                    <p>
                      Developed For both android and IOS devices using Flutter
                      framework. Integrate With Google Maps API, and also
                      utilized Firebase
                    </p>
                  </li>
                  <li>
                    <p>
                      Designed multiple mobile app designs and web designs As a
                      graphics designer also I have done multiple social media
                      designs , banners , rollups ,flyers and business cards.
                    </p>
                  </li>
                </ul>
              </div>
            </button>

            <h4 className="mt-1 font-medium text-sm text-gray-400">
              Junior Software developer
            </h4>
          </div>
        </div>
        <div
          className="flex border-b border-b-gray-500/30 mb-3 text-left
                pb-4"
        >
          <img
            src={TYK}
            alt="tyk"
            className="w-[50px] h-[50px] bg-white rounded-md bg-fit object-fit
                    shadow-lg"
          />
          <div className="ml-3 text-justify">
            <h3 className="m-0 font-medium text-leulePrime">TYK PLC.</h3>
            <p className="m-0 w-3/4">
              From a field of 15 of TYK competitors, I won first place for the
              finest and most user-friendly mobile application interface design
              for the firm
            </p>
            <h4 className="mt-1 font-medium text-sm text-gray-400">
              UI/Ux Designer
            </h4>
          </div>
        </div>
        <div
          className="flex border-b border-b-gray-500/30 mb-3 text-left
                pb-4"
        >
          <img
            src={Kibur}
            alt="kibur"
            className="w-[50px] h-[50px] rounded-md bg-fit object-fit
                    shadow-lg"
          />
          <div className="ml-3 text-justify">
            <h3 className="m-0 font-medium text-leulePrime">Kibur College</h3>
            <p className="m-0 w-3/4">
              I had a fantastic experience mentoring young people and guiding
              them toward better career paths as web engineers and UI/UX
              designers. I would like to thank Kibur College for giving me the
              chance to mentor other students and for giving me access to this
              fantastic opportunity.
            </p>
            <h4 className="mt-1 font-medium text-sm text-gray-400">
              UI/Ux Mentor | Front end Mentor
            </h4>
          </div>
        </div>
        <div
          className="flex border-b border-b-gray-500/30 mb-3 text-left
                pb-4"
        >
          <img
            src={SSC}
            alt="SSC"
            className="w-[50px] h-[50px] bg-white rounded-md bg-fit object-fit
                    shadow-lg"
          />
          <div className="ml-3 text-justify">
            <h3 className="m-0 font-medium text-leulePrime">
              SSC Banking and IT Solution
            </h3>
            <p className="m-0 w-3/4">
              I was employed as a software engineer and user interface designer
              to work on new Android Platform POS Machines.
            </p>
            <h4 className="mt-1 font-medium text-sm text-gray-400">
              UI/Ux Designer |Android App Developer | Graphic Designer
            </h4>
          </div>
        </div>
        <div
          className="flex border-b border-b-gray-500/30 mb-3 text-left
                pb-4"
        >
          <img
            src={Kemer}
            alt="Kemer"
            className="w-[50px] h-[50px] bg-white rounded-md bg-fit object-fit
                    shadow-lg"
          />
          <div className="ml-3 text-justify">
            <h3 className="m-0 font-medium text-leulePrime">Kemer Habesha</h3>
            <p className="m-0 w-3/4">
              Here the company i worked as a UI/ UX designer and Front-end
              developer , i have a very good experiance on using different tools
              like sketch and zeplin to design and engage with other developers
            </p>
            <h4 className="mt-1 font-medium text-sm text-gray-400">
              UI/Ux Designer | Front end developer
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarrerSummary;
