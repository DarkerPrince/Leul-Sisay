import React from "react";
import emailjs from '@emailjs/browser'; 
import { useRef } from "react";
import {RiCloseLine} from  'react-icons/ri'

export default function Modal() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("..... sending the email");
    emailjs.sendForm('service_er7vo1n', 'template_dd9w8on', form.current, 'FRxqZkMD3q3ETE3-I')
      .then((result) => {
        console.log("Sending the email Success ✅");
          console.log(result.text);
      }, (error) => {
         console.log("EOOOEEEERRRRRRRRR 🤬")
          console.log(error.text);
      });
      setShowModal(false);
      e.target.reset();
      alert("Thanks for Reaching Out 🙂");
  };

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-leulePrime hover:shadow-md hover:shadow-[#7A5FFF] active:bg-leulePrime/80 font-leuleFont text-white font-bold text-sm px-6 py-3  shadow-xs outline-none focus:outline-none mr-1 mb-1 mt-4 rounded-full ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Contact me
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  w-full md:w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800/80 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-6  py-2 border-b border-solid border-slate-600 rounded-t">
                 <div className="flex flex-col items-center w-full justify-center">
                 <h2 class="mb-1 text-2xl tracking-tight font-bold text-start text-leulePrime">Get in touch</h2>
               <p class="mb-2 lg:mb-2 font-light text-start text-slate-600 sm:text-lg">Ready to do great things with you.</p>
        
                 </div>

                    <RiCloseLine onClick={() => setShowModal(false)} className=" float-right h-6 w-6 text-white/50"/>
                  
                 
                </div>
                <form ref={form} onSubmit={sendEmail}>
                {/*body*/}
                <div className="relative p-6 space-y-6 flex-auto">
          <div>
              <label for="Name" class="block mb-2 text-sm font-medium text-gray-300">Your full name</label>
              <input type="text" name="user_name" class="shadow-sm border border-slate-500 text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="luel sisay" required/>
          </div>     
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your email</label>
              <input type="email" name="user_email" class="shadow-sm border border-slate-500 text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-300 ">Subject</label>
              <input type="text" name="subject" class="block p-3 w-full text-sm text-gray-300 rounded-lg border border-slate-500 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let me know how I can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-300 ">Your message</label>
              <textarea name="message" rows="6" class="block p-3 w-full text-sm text-gray-300 rounded-lg shadow-sm border border-slate-500 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
        
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-2.5 pb-3 ">
                 
                  <button
                    className="bg-leulePrime w-full md:w-1/2  active:bg-leulePrime/70 text-white text-sm px-6 py-3 rounded-lg mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Send Messsage
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}