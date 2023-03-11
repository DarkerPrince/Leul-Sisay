
import ContactmeNew from "./ContactmeNew";
import Heroimage from "./heroimage"
import Modal from "./modalview";



function HeroPage() {
  return (
    
      <div className="snap-start flex relative justify-center md:h-[100vh] bg-gradient-to-b from-slate-800 to-slate-900 items-start bg-contain bg-center bg-no-repeat object-contain">
        <div className="flex flex-col md:flex-row bg-center gap-6 md:gap-32 w-full md:mx-12   bg-no-repeat bg-contain items-center justify-center">
        
         
          <div
            className="flex flex-col justify-center md:items-start items-center text-left "
          >
            <div className="flex flex-col items-center md:items-start">
              <div className="relative fle gap-4">
              <h1
                className="text-4xl text-leulePrime lg:text-8xl font-black drop-shadow-xl md:mb-6"
              >
                Hey !
              </h1>
              <div className="lg:absolute lg:right-2 lg:top-10">

              <ContactmeNew/>
              </div>
              </div>
              <h1
                className="text-4xl text-leulePrime lg:text-8xl font-black drop-shadow-xl md:mb-6 buttonShaking"
              >
                I am Leul S.
              </h1>
            </div>
            <div
              className="flex flex-col items-start justify-center rounded-lg p-2"
            >
              <p className="mb-3 text-lg font-thin text-white text-center md:text-left">
                Software engineer | Mobile First app developer | <br className="md:block hidden" />
                UI/UX designer | Graphic Designer
              </p>
              <div className=" w-full flex items-center justify-center md:justify-start">
              <Modal />
              </div>
              
            </div>
         
            
            
          </div>

          {/* <!-- image placer for the face of mine --> */}
         
          <Heroimage />
          
       
        </div>
     
    </div>
  );
}
export default HeroPage;
