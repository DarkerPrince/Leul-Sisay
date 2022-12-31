import myfaceImage2 from "./myface.png";

function NavigationBar() {
  return (
    <nav className="flex sticky top-0 z-50 bg-gray-800 items-center justify-between px-24 text-white text-sm gap-12 py-6">
      <div
        className="flex delay-500 items-center h-12 text-white shadow-md bg-leulePrime
            justify-center rounded-full px-4"
      >
        <img
          src={myfaceImage2}
          alt="profile"
          className="bg-cover rounded-full w-8 h-8 mr-2"
        />
        <span className="text-sm"> Contact me </span>
      </div>
      <div className="flex gap-6">
        <a href="">
          <div className="font-semibold text-leulePrime border-b-2 border-leulePrime">
            <span>Portfolio</span>
          </div>
        </a>

        <a href="./blogpost.html">
          <div className="font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime">
            <span>Blog posts</span>
          </div>
        </a>

        <a href="">
          <div className="font-semibold text-white hover:text-leulePrime hover:border-b-2 hover:border-leulePrime">
            <span>Go to</span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
