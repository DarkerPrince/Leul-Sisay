import React from 'react'
import AIT from "./assets/company/AIT.png";
import Kibur from "./assets/company/kibur.jpg";
import SSC from "./assets/company/SSC.png";
import Kemer from "./assets/company/kemer.png";

function WorkTimeline() {
  return (
    <div className="min-h-screen md:w-5/6 py-3 flex flex-col justify-center  sm:py-12">
  <div className="py-3  md:w-full  sm:mx-2 sm:px-0">

    <div className="relative text-gray-700 antialiased text-sm font-semibold">

      {/* <!-- Vertical bar running through middle --> */}
      <div className="hidden sm:block w-[2px] bg-leulePrime/25 absolute h-full left-1/2 transform -translate-x-1/2"></div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pr-8">
              <div className="p-4 bg-slate-400/20 rounded-md ">
              <div className="text-white">
            <h3 className="m-0 font-medium text-leulePrime">
              AIT IT Solutions and Cybersecurity
            </h3>
            <p className=" font-normal text-white">
              I've been working as a UI/UX designer and a graphics designer on a
              mobile platform that performs ecommerce.
            </p>

            <button
              className="inline-flex relative flex-col gap-2 group
                     "
            >
              <p className=" font-normal mb-3 text-leulePrime/70 text-xs rounded-md">
                More
              </p>

              <div
                className="hidden top-full
                        group-focus:block "
              >
                <ul className="flex flex-col font-normal px-2 mb-3 list-disc text-left space-y-4">
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
            </div>
          </div>
          <img
            src={AIT}
            alt="AIT TECH"
            className="w-[50px] h-[50px] mb-5   object-contain bg-white rounded-full border-leulePrime border-2 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"   
          />
        </div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-end w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pl-8">
              <div className="p-4 bg-slate-400/20 rounded-md">
            <div className="text-white">
            <h3 className="m-0 font-medium text-leulePrime">
            SSC Banking and IT Solution
            </h3>
            <p className=" font-normal">
              I was employed as a software engineer and user interface designer
              to work on new Android Platform POS Machines.
            </p>

            <button
              className="inline-flex relative flex-col gap-2 group
                     "
            >
              <p className=" font-normal mb-3 text-leulePrime/70 text-xs rounded-md">
                More
              </p>

              <div
                className="hidden top-full
                        group-focus:block "
              >
                <ul className="flex flex-col font-normal px-2 mb-3 list-disc text-left space-y-4">
                  <li>
                    <p>
                    Created an app for new Android POS devices using native Java and C++ and has experience with older POS devices and how they operate and process payments.
                    </p>
                  </li>
                </ul>
              </div>
            </button>

            <h4 className="mt-1 font-medium text-sm text-gray-400">
               Android App Developer | Graphic Designer
            </h4>
              </div>
              </div>
            </div>
          </div>
          <img
            src={SSC}
            alt="SSC TECH"
            className="w-[50px] h-[50px] mb-5   object-contain bg-white rounded-full border-leulePrime border-2 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"   
          />
        </div>
      </div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pr-8">
              <div className="p-4 bg-slate-400/20 rounded-md">
              <div className="text-white">
            <h3 className="m-0 font-medium text-leulePrime">
              Kemer Habesha
            </h3>
            <p className=" font-normal">
            I have vast experience with several design and collaboration tools, like as Sketch and Zeplin, to collaborate with customers and other front-end and back-end engineers. I worked as a UI/UX designer and front-end developer with React.
            </p>

            <button
              className="inline-flex relative flex-col gap-2 group
                     "
            >
              <p className=" font-normal mb-3 text-leulePrime/70 text-xs rounded-md">
                More
              </p>

              <div
                className="hidden top-full
                        group-focus:block "
              >
                <ul className="flex flex-col font-normal px-2 mb-3 list-disc text-left space-y-4">
                  <li>
                    <p>
                    Designed Alen, a job-finding application created with Sketch and Zeplin, connects individuals in need of any form of service with those who can provide it.
                    </p>
                  </li>
                  <li>
                    <p>
                   Designed The Melkam Bakery Inventory System program, which was created, is an inventory management system that manages the resources and employees of a bakery firm with various branches and employees.
                    </p>
                  </li>
                </ul>
              </div>
            </button>

            <h4 className="mt-1 font-medium text-sm text-gray-400">
            UI/Ux Designer | Front end developer
            </h4>
              </div>
              </div>
            </div>
          </div>
          <img
            src={Kemer}
            alt="Kemer Habesha"
            className="w-[50px] h-[50px] mb-5   object-contain bg-white rounded-full border-leulePrime border-2 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"   
          />
        </div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div className="mt-6 sm:mt-8">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-end w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pl-8">
              <div className="p-4 bg-slate-400/20 rounded-md">
              <div className="text-white">
            <h3 className="m-0 font-medium text-leulePrime">
            Kibur College
            </h3>
            <p className=" font-normal">
            I had a fantastic experience mentoring young people and guiding
              them toward better career paths as web engineers and UI/UX
              designers. I would like to thank Kibur College for giving me the
              chance to mentor other students and for giving me access to this
              fantastic opportunity.
            </p>

            <button
              className="inline-flex relative flex-col gap-2 group
                     "
            >
              <p className=" font-normal mb-3 text-leulePrime/70 text-xs rounded-md">
                More
              </p>

              <div
                className="hidden top-full
                        group-focus:block "
              >
                <ul className="flex flex-col font-normal px-2 mb-3 list-disc text-left space-y-4">
                  <li>
                    <p>
                     Mentored Baics in UI UX design and case study development for a project. conducting research, speaking with users, and creating empathy maps to better understand them
                    </p>
                  </li>
                  <li>
                    <p>
                    Additionally, I've taught them the fundamentals of developing rules and guidelines for more effective, appealing, and engaging apps. I've also given them a basic introduction to design tools like Figma and XD and shown them how to represent their data on mockups using Photoshop. 
                    </p>
                  </li>
                </ul>
              </div>
            </button>

            <h4 className="mt-1 font-medium text-sm text-gray-400">
            UI/Ux Mentor | Front end Mentor
            </h4>
              </div>
              </div>
            </div>
          </div>
          <img
            src={Kibur}
            alt="Kibur College"
            className="w-[50px] h-[50px] mb-5   object-contain bg-white rounded-full border-leulePrime border-2 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"   
          />
        </div>
      </div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pr-8">
              <div className="p-4 bg-slate-400/20 rounded-md">
              <div className="text-white">
            <h3 className="m-0 font-medium text-leulePrime">
              E-LMIS Project
            </h3>
            <p className=" font-normal">
            The Ethiopian Ministry of Skill and Development is in charge of the E-LMIS (Ethiopian Labor Market Information System), which is primarily focused on managing the labor force by training and directing workers in the ways they prefer through biometric registration and step-by-step monitoring their career steps.
            </p>

            <button
              className="inline-flex relative flex-col gap-2 group
                     "
            >
              <p className=" font-normal mb-3 text-leulePrime/70 text-xs rounded-md">
                More
              </p>

              <div
                className="hidden top-full
                        group-focus:block "
              >
                <ul className="flex flex-col font-normal px-2 mb-3 list-disc text-left space-y-4">
                  <li>
                    <p>
                    Designed and Developed <span className='text-green-500 font-medium'> Job Portal Service </span> that allows labor forces to locate open positions that have been removed from other platforms and to submit applications quickly after registering their labor forces and organization owners, who can register their organizations here. maintain their account here, employ staff, and develop a social network for their business.
                    </p>
                  </li>
                  <li>
                    <p>
                    Every worker in Ethiopia will register using their fingerprint, face, and iris through the platform we provided on the <span className='text-blue-500 font-medium'> Biometrics registration portal </span>, and they will receive services for the entire system of services that LMIS offers.
                    </p>
                  </li>
                  <li>
                    <p>
                    With services like <span className='text-leulePrime font-medium'> NRP (National Recruitment Platform)</span>, through which organizations may manage the testing of potential new hires for their workforce.<span className='text-teal-500 font-medium'> EMDMS (Ethio Migrant Database Management system)</span>, where migrants in Ethiopia will handle the process of working in other countries through agents,<span className='text-yellow-500 font-medium'>Startup-Platform </span>, to introduce new business ideas and aid them through contribution and collaboration, and many more are described on the landing page for E-LMIS.
                    </p>
                  </li>
                </ul>
              </div>
            </button>

            <h4 className="mt-1 font-medium text-sm text-gray-400">
            UI/Ux Designer | Front end developer
            </h4>
              </div>
              </div>
            </div>
          </div>
          <img
            src={Kemer}
            alt="Kemer Habesha"
            className="w-[50px] h-[50px] mb-5   object-contain bg-white rounded-full border-leulePrime border-2 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"   
          />
        </div>
      </div>



    </div>

  </div>
</div>
  )
}

export default WorkTimeline