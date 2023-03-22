import HeroPage from "./heropage";
import SkillsPage from "./skillspage";
import CertificationPage from "./certificationpage";
import CarrerSummary from "./careersummary";


import Categories from "./categories";


import WorkGallery from "./gallerypage";




function Homepage() {
  return (
    <div className="font-leuleFont md:snap-proximity snap-y">
      <HeroPage />
      <div id="category">
      <Categories />
      </div>
      <div id="skill">
      <SkillsPage />
      </div>
      <div id="gallery">
      <WorkGallery/>
      </div>
      <CertificationPage />
      <CarrerSummary />
    
    </div>
  );
}

export default Homepage;
