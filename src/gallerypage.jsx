import CoopImg from "./assets/UX/Coop/mobCoop.png";
import DingImg from "./assets/UX/Ding/mobDing.png";
import HospitalSchedulerImg from "./assets/UX/hospital/deskHospital.png";
import AnbessaPassengerImg from "./assets/UX/Anbessa/AnbessaPassenger/mobAnbessa.png";
import EthioMartImg from "./assets/UX/Ethiomart/mobMart.png";
import AlenJobImg from "./assets/UX/Alenjob/mobAlen.png";
import SzimpleImg from "./assets/UX/Szimple/mobSzimple.png";
import EventTimeImg from "./assets/UX/ET/mobET.png";
import AnbessaDriverImg from "./assets/UX/Anbessa/AnbessaDriver/TabAnbessa.png";
import HospitalSchedulerAdminImg from "./assets/UX/hospital/webHospital.png";
import Data360Img from "./assets/UX/360/both360.png";

function WorkGallery() {
  return (
    <div id="my_work">
      <div className="mx-24">
        <h2
          className="flex flex-col text-xl lg:text-4xl font-semibold mb-2
            text-leulePrime"
        >
          My works
        </h2>
        <div className="text-sm flex flex-wrap gap-3 mb-6">
          <div className="tag-selected">UI Design</div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Developed</span>{" "}
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Case Studies</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Business Cards</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Booklets</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Banners</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Social Media Posts</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Logo Designs</span>
          </div>
          <div
            className="tag3 hover:shadow-lg
                hover:bg-leulePrime hover:text-white"
          >
            <span>Others</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 w-full gap-3">
        <img
          className="bg-cover bg-center w-full h-full object-cover bg-no-repeat hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-100 hover:overflow-hidden rounded-md
            col-start-1 col-span-2"
          src={CoopImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit bg-center row-span-2 rounded-md"
          src={DingImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit rounded-md row-span-2 col-span-2"
          src={HospitalSchedulerImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit rounded-md row-span-2 bg-center"
          src={AnbessaPassengerImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit rounded-md"
          src={EthioMartImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit bg-center row-span-2 rounded-md"
          src={AlenJobImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit rounded-md"
          src={SzimpleImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit rounded-md col-span-2"
          src={EventTimeImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit rounded-md col-span-2 row-span-2"
          src={AnbessaDriverImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit rounded-md col-span-2"
          src={DingImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit rounded-md"
          src={HospitalSchedulerAdminImg}
          alt=""
          srcset=""
        />
        <img
          className="bg-cover w-full h-full object-cover hover:scale-150 transition-all duration-300 ease-in-out hover:z-50 hover:delay-300 hover:bg-fit rounded-md"
          src={Data360Img}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default WorkGallery;
