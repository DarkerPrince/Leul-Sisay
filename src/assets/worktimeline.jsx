import React from 'react'
import AIT from "../assets/company/AIT.png";

function WorkTimeline() {
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
  <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

    <div className="relative text-gray-700 antialiased text-sm font-semibold">

      {/* <!-- Vertical bar running through middle --> */}
      <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pr-8">
              <div className="p-4    bg-white rounded shadow">
              <div
          className="flex border-b border-b-gray-500/30 mb-3 text-left pb-4"
        >
        
          <div className="">
            <h3 className="m-0 font-medium text-leulePrime">
              AIT IT Solutions and Cybersecurity
            </h3>
            <p className=" font-normal">
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
          </div>
          <img
            src={AIT}
            alt="AIT TECH"
            className="w-[50px] h-[50px]   object-contain bg-white rounded-full border-leulePrime border-2 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"   
          />
        </div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-end w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pl-8">
              <div className="p-4 bg-white rounded shadow">
                My life got flipped turned upside down,
              </div>
            </div>
          </div>
          <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pr-8">
              <div className="p-4 bg-white rounded shadow">
                And I'd like to take a minute, just sit right there,
              </div>
            </div>
          </div>
          <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div className="mt-6 sm:mt-0">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-end w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pl-8">
              <div className="p-4 bg-white rounded shadow">
                I'll tell you how I became the Prince of a town called Bel Air.
              </div>
            </div>
          </div>
          <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
      </div>



    </div>

  </div>
</div>
  )
}

export default WorkTimeline