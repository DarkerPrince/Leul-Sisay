import HeroPage from "./heropage";
import SkillsPage from "./skillspage";
import CertificationPage from "./certificationpage";
import CarrerSummary from "./careersummary";
import Galleries from "./galleryAnimate";
import Categories from "./categories";
import { CategoriesType } from "./files";


function Homepage() {
  return (
    <div className="bg-slate-800 font-leuleFont">
      <HeroPage />
      <Categories  />  
      <Galleries />
      <SkillsPage />
      <CertificationPage />
      <CarrerSummary />
    </div>
  );
}

export default Homepage;
