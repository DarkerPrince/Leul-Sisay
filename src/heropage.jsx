import myfaceImage from "./myface4.png";

function HeroPage() {
  return (
    <div className="bg-slate-800">
      <div className="flex relative justify-center h-screen items-center bg-contain bg-center bg-no-repeat object-contain">
        <div className="flex bg-center gap-32 w-full mx-12  bg-no-repeat bg-contain items-center justify-center">
          <div
            className="flex flex-col justify-center items-start text-left
                      "
          >
            <div className="flex flex-col items-start">
              <h1
                className="text-4xl text-leulePrime lg:text-8xl
                           font-black drop-shadow-xl
                           mb-6"
              >
                Hey!
              </h1>
              <h1
                className="text-4xl text-leulePrime lg:text-8xl
                           font-black drop-shadow-xl
                           mb-6"
              >
                I am Leul
              </h1>
            </div>
            <div
              className="flex justify-center rounded-lg items-center
                           p-2"
            >
              <p className="mb-3 text-lg font-medium text-white">
                Software engineer | Mobile First app developer <br />
                UI/UX designer | Graphic Designer
              </p>
            </div>
          </div>

          {/* <!-- image placer for the face of mine --> */}
          <img
            className="w-[540px] object-contain"
            src={myfaceImage}
            alt="Text here of the"
          />
        </div>
      </div>
    </div>
  );
}
export default HeroPage;
