import bottomdecor from "./assets/decoration/sidebottomDecor.png";
import WorkTimeline from "./assets/worktimeline";
import FooterComponent from "./footerPage";


function CarrerSummary() {
  return (
    <div
      id="my_career"
      className="snap-start flex flex-col bg-contain bg-no-repeat bg-slate-800 bg-right items-center
        justify-center text-white"
      style={{ backgroundImage: `url(${bottomdecor})` }}
    >
      <h1 className="flex flex-col text-4xl font-semibold text-leulePrime">
        Career Summary
      </h1>
      <WorkTimeline/>
      <FooterComponent/>
    </div>
  );
}

export default CarrerSummary;
