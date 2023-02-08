import HeroPage from "./heropage";
import WorkGallery from "./gallerypage";
import SkillsPage from "./skillspage";
import CertificationPage from "./certificationpage";
import CarrerSummary from "./careersummary";
import Galleries from "./galleryAnimate";

function Homepage() {
  return (
    <div className="bg-slate-800 space-y-20 font-leuleFont">
      <HeroPage />
      <Galleries />
      <SkillsPage />
      <CertificationPage />
      <CarrerSummary />
    </div>
  );
}

export default Homepage;
